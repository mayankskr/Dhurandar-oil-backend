import express from 'express';
import { handleCreateOrder } from '../controllers/order.controller.js';

const router = express.Router();

// POST /api/orders/create
router.post('/create', handleCreateOrder);

export default router;