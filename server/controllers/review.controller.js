// server/controllers/review.controller.js
import Review from '../models/review.model.js';
import Product from '../models/product.model.js';

export const addReview = async (req, res) => {
  const { productId } = req.params;
  const { rating, comment } = req.body;

  try {
    const review = new Review({
      user: req.user._id,
      product: productId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ message: 'Review added', review });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review', details: err.message });
  }
};

export const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name'); // optional: show reviewer name
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get reviews', details: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) return res.status(404).json({ error: 'Review not found' });

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await Review.findByIdAndDelete(req.params.reviewId);
    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete review', details: err.message });
  }
};
