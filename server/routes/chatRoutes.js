import express from 'express';
import { protect } from '../middleware/auth.js';
import {
	createMessage,
	findOrCreateChat,
	getUserConversations,
} from '../controllers/chatController.js';

const router = express.Router();

router.get('/', protect, getUserConversations);
router.post('/conversation', protect, findOrCreateChat);
router.post('/message', protect, createMessage);

export default router;
