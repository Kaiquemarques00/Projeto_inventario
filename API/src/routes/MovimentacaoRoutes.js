import express from "express";

import MovimentacaoController from "../controllers/MovimentacaoController.js";

const movimentacaoController = new MovimentacaoController();

const router = express.Router();

router.get('/movements', movimentacaoController.consultMovements);

router.post('/movement', movimentacaoController.createMovement);

export default router;