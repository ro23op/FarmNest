import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Vegetables", "Dairy", "Fruits", "Cereals", "Dry Fruits", "Spices", "Oraganic Spices"]
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Farm',
        required:true,
    },
    quantityAvailable: { 
        type: Number,
        default: 0 
    },
    measure: {
        type: String,
        enum: ["/Kg", "/Lt", "/Dozen"]
    }

})

export default mongoose.model('Product',productSchema);