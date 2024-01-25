import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import {
	ChatBubbleOutlineOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	ShareOutlined,
	BookmarkBorderOutlined,
	Send,
} from '@mui/icons-material';

const Post = ({
	name,
	description,
	location,
	picturePath,
	videoPath,
	userPicturePath,
	likes,
	comments,
	shares,
	saves,
}) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	const handleLike = () => {
		setIsLiked(!isLiked);
	};

	const handleSave = () => {
		setIsSaved(!isSaved);
	};

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={userPicturePath} alt={name} />}
				title={name}
				subheader={location}
			/>
			<CardContent>
				<Typography variant='body1' color='textPrimary' component='div'>
					{description}
				</Typography>
				{picturePath && (
					<CardMedia
						component='img'
						alt='Post Image'
						height='140'
						image={picturePath}
					/>
				)}
				{videoPath && (
					<CardMedia
						component='video'
						alt='Post Video'
						height='140'
						controls
						loop
						autoPlay
						muted
					>
						<source src={videoPath} type='video/mp4' />
						Your browser does not support the video tag.
					</CardMedia>
				)}
			</CardContent>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				padding='1rem'
			>
				<Box display='flex' alignItems='center'>
					<IconButton onClick={handleLike}>
						{isLiked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
					</IconButton>
					<Typography>{likes.length}</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<IconButton>
						<ChatBubbleOutlineOutlined />
					</IconButton>
					<Typography>{comments.length}</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<IconButton onClick={handleSave}>
						{isSaved ? <BookmarkBorderOutlined /> : <BookmarkBorderOutlined />}
					</IconButton>
					<Typography>{saves.length}</Typography>
				</Box>
				<IconButton>
					<ShareOutlined />
				</IconButton>
			</Box>
			{comments.length > 0 && (
				<Box padding='1rem'>
					<Typography variant='h6'>Comments:</Typography>
					{comments.map((comment, index) => (
						<Typography key={index} variant='body2' color='textSecondary'>
							{comment}
						</Typography>
					))}
				</Box>
			)}
			{/* Add a comment input field and button if needed */}
			{/* <TextField label="Add Comment" />
      <Button variant="contained" color="primary">
        Add Comment
      </Button> */}
		</Card>
	);
};

export default Post;
