import asyncHandler from '../middleware/asyncHandler.js';
import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';
import ErrorResponse from '../utils/ErrorResponse.js';

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


// @desc   Delete a conversation
// @route   DELETE /api/v1/chats/conversation
// @access  Private
export const deleteConversation = asyncHandler(async (req, res, next) => {});


// @desc   Create a new message in a conversation
// @route   POST /api/v1/chats/message
// @access  Private
export const createMessage = asyncHandler(async (req, res, next) => {
	const userId = req.user._id;
	const { content, conversationId } = req.body;

    if (!content || !conversationId){
        return next(
			new ErrorResponse(
				'content and conversationId is required',
				400
			)
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

	// Update the corresponding conversation with the new message
	await Conversation.findByIdAndUpdate(
		conversationId,
		{ $push: { messages: createdMessage._id } },
		{ new: true }
	);


    
	res.status(201).json({ success: true, data: createdMessage });
});
