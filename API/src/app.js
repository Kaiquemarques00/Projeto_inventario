import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import db from "./config/db.js";
import productsRoutes from "./routes/ProductsRoutes.js";
import categoriesRoutes from "./routes/CategoriesRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
db.connect();

app.use('/', productsRoutes);
app.use('/', categoriesRoutes);

export default app;