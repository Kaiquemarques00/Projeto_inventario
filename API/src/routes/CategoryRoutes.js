import express from "express";

import CategoryController from "../controllers/CategorysController.js";

const categoryController = new CategoryController();

const router = express.Router();

router.get('/categorys', categoryController);

export default router;