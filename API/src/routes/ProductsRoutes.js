import express from "express";

import ProductsController from "../controllers/ProductsController.js";

const productsController = new ProductsController();

const router = express.Router();

router.get('/products', productsController.consultProducts);

router.get('/product/:id', productsController.consultProduct);

router.post('/product', productsController.createProduct);

router.patch('/product/:id', productsController.changeProduct);

router.delete('/product/:id', productsController.deleteProduct);

export default router;