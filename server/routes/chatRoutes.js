import express from 'express';
import { protect } from '../middleware/auth.js';
import {  findOrCreateChat } from '../controllers/chatController.js';

const router = express.Router();

router.post('/create', protect, findOrCreateChat);

export default router;
