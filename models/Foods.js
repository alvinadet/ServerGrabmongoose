const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
});

module.exports = mongoose.model('Food', FoodSchema);
