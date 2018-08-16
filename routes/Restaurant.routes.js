const express = require('express');
const router = express.Router();

const RestaurantController = require('../controllers/Restaurant.ctrl');

router.get('/', RestaurantController.index);

router.post('/', RestaurantController.store);
router.get('/:id', RestaurantController.detail);

router.put('/:id', RestaurantController.update);

router.delete('/:id', RestaurantController.delete);

module.exports = router;
