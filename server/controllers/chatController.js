import asyncHandler from '../middleware/asyncHandler.js';
import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';
import ErrorResponse from '../utils/ErrorResponse.js';

// @desc   Get all conversations belonging to a user
// @route   GET /api/v1/chats
// @access  Private
export const getUserConversations = asyncHandler(async (req, res, next) => {
	try {
		const userId = req.user._id;

		const conversations = await Conversation.find({
			users: userId,
		}).populate('users', 'firstName lastName');

		res.status(200).json({ success: true, data: conversations });
	} catch (error) {
		console.error(error);
		return next(new ErrorResponse('Could not fetch user conversations', 500));
	}
});

// @desc   Create a new conversation or return a Conversation based on participants
// @route   POST /api/v1/chats/conversation
// @access  Private
export const findOrCreateChat = asyncHandler(async (req, res, next) => {
	const userId = req.user._id;
	const { receiverId } = req.body;

	if (!receiverId) {
		return next(new ErrorResponse('Receiver ID is required', 400));
	}

	const users = [userId, receiverId];

	const conversation = await Conversation.findOne({ users: { $all: users } });

	if (conversation) {
		res.status(200).json({ success: true, data: conversation });
	} else {
		// Create a new conversation
		const newConversation = await Conversation.create({ users });
		res.status(201).json({ success: true, data: newConversation });
	}
});

// @desc   Create a new message in a conversation
// @route   POST /api/v1/chats/message
// @access  Private
export const createMessage = asyncHandler(async (req, res, next) => {
	const userId = req.user._id;
	const { content, conversationId } = req.body;

	if (!content || !conversationId) {
		return next(
			new ErrorResponse('content and conversationId is required', 400)
		);
	}

	const isUserInConversation = await Conversation.exists({
		_id: conversationId,
		users: userId,
	});

	if (!isUserInConversation) {
		return next(
			new ErrorResponse(
				'User is not authorized to access this conversation',
				403
			)
		);
	}

	const newMessage = new Message({
		sender: userId,
		content,
	});

	const createdMessage = await newMessage.save();

	await Conversation.findByIdAndUpdate(
		conversationId,
		{ $push: { messages: createdMessage._id } },
		{ new: true }
	);

	res.status(201).json({ success: true, data: createdMessage });
});
