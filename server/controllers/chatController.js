import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/// @desc    Create a chat
// @route   POST /api/v1/chats/create
// @access  Private/User
export const createChat = asyncHandler(async (req, res, next) => {
	res.status(201).json({ success: true, data: {} });
});
