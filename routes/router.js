const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

router.get('/', indexController.index);
router.get('/products', productsController.products_list);
router.get('/products/:productId', productsController.product_infos);

router.get('/inscription', userController.sign_up);

module.exports = router;