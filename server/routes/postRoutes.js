import express from 'express';
import { createPost } from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.post('/create', createPost);

export default router;
