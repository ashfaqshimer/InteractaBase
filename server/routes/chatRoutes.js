import express from 'express';
import { protect } from '../middleware/auth.js';
import { createChat } from '../controllers/chatController.js';

const router = express.Router();

router.post('/create', protect, createChat);

export default router;
