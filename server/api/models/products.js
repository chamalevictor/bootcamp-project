const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: String,
    model: String,
    height: Number,
    large1: Number,
    depth: Number,
    description: String,
    price: Number
});

module.exports = mongoose.model('escritorios', productSchema)