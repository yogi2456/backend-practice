import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name: String,
    price: Number,
    image: String,
    category: String
})

export default mongoose.model('Product', product)