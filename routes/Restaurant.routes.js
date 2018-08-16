const express = require('express');
const router = express.Router();

const RestaurantController = require('../controllers/Restaurant.ctrl');
//get toko all
router.get('/', RestaurantController.index);

//post toko & get id
router.post('/', RestaurantController.store);
router.get('/:id', RestaurantController.detail);

//update toko
router.put('/:id', RestaurantController.update);

//delete toko
router.delete('/:id', RestaurantController.delete);

//get foods
router.get('/:id/foods', RestaurantController.getFoods);

//post foods
router.post('/:id/foods', RestaurantController.storeFoods);

module.exports = router;
