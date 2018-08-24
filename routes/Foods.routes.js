const express = require('express');
const router = express.Router();

const FoodsController = require('../controllers/Foods.ctrl');

router.get('/', FoodsController.getAll);

router.get('/:id', FoodsController.detail);

router.put('/:id', FoodsController.update);

router.delete('/:id', FoodsController.delete);

module.exports = router;
