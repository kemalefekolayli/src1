const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('../config/dbconfig')
const ProductsController = require('../controllers/ProductController')
const loginController = require('../controllers/loginController')
const middleware = require('../middlewares/verify')
const middleware1 = require('../middlewares/validation')


router.put('/update_product', middleware.verify , ProductsController.updateProduct)

router.delete('/delete_product', middleware.verify , ProductsController.deleteProduct)

router.get('/get_product', middleware.verify , ProductsController.getproduct)

router.post('/register', [] , ProductsController.addproducts)

router.post('/login', middleware1.validationEmail , loginController.login ) 

router.post('/login/secondary', [] , loginController.login1 )


module.exports = router


