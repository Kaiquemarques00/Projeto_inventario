import express from "express";

import ProductsController from "../controllers/ProductsController.js";

const productsController = new ProductsController();

const router = express.Router();

router.get('/products', productsController.consultProducts);

export default router;