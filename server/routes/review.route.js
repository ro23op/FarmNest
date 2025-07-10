// server/routes/review.route.js
import express from 'express';
import { addReview, getProductReviews, deleteReview } from '../controllers/review.controller.js';
import { checkAuth } from '../middleware/checkAuth.js';

const router = express.Router();

// POST /api/reviews/:productId
router.post('/:productId', checkAuth, addReview);

// GET /api/reviews/:productId
router.get('/:productId', getProductReviews);

// DELETE /api/reviews/:reviewId
router.delete('/:reviewId', checkAuth, deleteReview);

export default router;
