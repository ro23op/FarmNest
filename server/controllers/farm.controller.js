import Farm from '../models/farm.model.js';

export const registerFarm = async (req, res) => {
  try {
    const { name, description, location, coordinates, image } = req.body;

    const newFarm = new Farm({
      name,
      description,
      location,
      image,
      geometry: {
        type: 'Point',
        coordinates
      },
      owner: req.user._id // comes from checkAuth middleware
    });

    const savedFarm = await newFarm.save();
    res.status(201).json(savedFarm);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};