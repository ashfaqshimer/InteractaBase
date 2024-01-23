import express from 'express';
import { protect } from '../middleware/auth.js';
import {  createMessage, findOrCreateChat } from '../controllers/chatController.js';

const router = express.Router();

router.post('/conversation', protect, findOrCreateChat);
router.post('/message', protect, createMessage)


export default router;
