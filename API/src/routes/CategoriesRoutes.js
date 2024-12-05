import express from "express";

import CategoriesController from "../controllers/CategoriesController.js";

const categoriesController = new CategoriesController();

const router = express.Router();

router.get('/categories', categoriesController.consultCategories);

router.get('/category/:id', categoriesController.consultCategory);

router.post('/category', categoriesController.createCategory);


export default router;