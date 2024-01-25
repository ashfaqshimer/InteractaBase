import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setPosts } from 'state';
import { Typography } from '@mui/material';
import toast from 'react-hot-toast';
import Post from './Post';

const FeedWidget = ({ userId, isProfile = false }) => {
	// Sample dummy data for posts
	const dummyPosts = [
		{
			_id: '1',
			userId: 'user1',
			firstName: 'John',
			lastName: 'Doe',
			description: 'This is a sample post.',
			location: 'City A',
			picturePath: '/path/to/image1.jpg',
			videoPath: '/path/to/video1.mp4',
			userPicturePath: '/path/to/user1.jpg',
			likes: 10,
			comments: 5,
			shares: 2,
			saves: 8,
		},
		// Add more dummy posts as needed
	];
	const dispatch = useDispatch();
	// const posts = useSelector((state) => state.posts);
	const [posts, setPosts] = useState(dummyPosts);

	useEffect(() => {
		// Set dummy data as posts
		// dispatch(setPosts({ posts: dummyPosts }));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{posts && Array.isArray(posts) ? (
				posts.map(
					({
						_id,
						userId,
						firstName,
						lastName,
						description,
						location,
						picturePath,
						videoPath,
						userPicturePath,
						likes,
						comments,
						shares,
						saves,
					}) => (
						<Post
							key={_id}
							postId={_id}
							postUserId={userId}
							name={`${firstName || ''} ${lastName || ''}`}
							description={description}
							location={location}
							picturePath={picturePath}
							videoPath={videoPath}
							userPicturePath={userPicturePath}
							likes={likes}
							comments={comments}
							shares={shares}
							saves={saves}
						/>
					)
				)
			) : (
				<Typography>Error: Unable to fetch posts</Typography>
			)}
		</>
	);
};

export default FeedWidget;
