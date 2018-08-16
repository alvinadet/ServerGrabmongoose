const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  image: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
