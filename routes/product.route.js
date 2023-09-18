const express = require('express');
const { getProduct, postProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers');

const router = express.Router();

router.route('/')
.get(getProduct)
.post(postProduct)

router.route('/:id')
.patch(updateProduct)
.delete(deleteProduct)



module.exports = router;