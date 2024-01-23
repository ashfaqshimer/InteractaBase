import { Router } from 'express';
import { getUsers, getUser, deleteUser } from '../controllers/userControllers.js';

import { protect } from '../middleware/auth.js';

const router = Router();

router.route('/').get(getUsers)
router.route('/:id').get(getUser).delete(protect, deleteUser);

export default router;