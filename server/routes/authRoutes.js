import express from "express"
import {createUser, loginUser, getMe} from "../controllers/authController.js"
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect, getMe);

export default router;