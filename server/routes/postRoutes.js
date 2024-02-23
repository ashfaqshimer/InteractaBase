import express from 'express';
import {} from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createUser);

export default router;
