import { Schema, model } from 'mongoose';

const ConversationSchema = new Schema({
	users: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	],
	messages: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
});

export default model('Conversation', ConversationSchema);
