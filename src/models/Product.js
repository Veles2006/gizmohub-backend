const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: String,
  price: Number,
  images: [String],
  variants: [{ color: String }],
  description: String,
});

module.exports = mongoose.model('Product', ProductSchema);
