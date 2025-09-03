import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        required: false,
    },
    image: {
        type: [String],
        required: true,
    },
    date: {
        type: Number,
        default: true,
    }

})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product;


