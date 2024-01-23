import asyncHandler from '../middleware/asyncHandler.js';
import Conversation from '../models/Conversation.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/// @desc   Create a new conversation or return a Conversation based on participants
// @route   POST /api/v1/chats/create
// @access  Private
export const findOrCreateChat = asyncHandler(async (req, res, next) => {
	const userId = req.user._id;
	const { receiverId } = req.body;

    if (!receiverId){
        return next(new ErrorResponse('Receiver ID is required', 400));
    }

	const users = [userId, receiverId];

	const conversation = await Conversation.findOne({users: {$all: users}});

	if (conversation) {
		res.status(200).json({ success: true, data: conversation });
	} else {
		// Create a new conversation
		const newConversation = await Conversation.create({ users });
		res.status(201).json({ success: true, data: newConversation });
	}
});
