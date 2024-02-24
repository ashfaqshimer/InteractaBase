import express from 'express';
import { createPost, getPosts } from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';
import advancedResults from '../middleware/advancedResults.js';
import Post from '../models/Post.js';

const router = express.Router();

router.use(protect);

router.get('/', advancedResults(Post, 'author'), getPosts);
router.post('/create', createPost);

export default router;
