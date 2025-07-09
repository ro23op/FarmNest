import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
  username: {
    type: String,
  },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    authProvider: {
        type: String,
    },
    cart: [cartItemSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model("User", userSchema);
