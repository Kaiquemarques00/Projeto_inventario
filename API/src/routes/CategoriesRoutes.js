import express from "express";

import CategoriesController from "../controllers/CategoriesController.js";

const categoriesController = new CategoriesController();

const router = express.Router();

router.get('/categories', categoriesController.consultCategories);

router.get('/category/:id', categoriesController.consultCategory);

router.post('/category', categoriesController.createCategory);

router.patch('/category/:id', categoriesController.changeCategory);

router.delete('/category/:id', categoriesController.deleteCategory);

export default router;