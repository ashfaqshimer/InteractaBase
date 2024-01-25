import { Box } from '@mui/material';

const UserImage = ({ image, size = '60px' }) => {
	return (
		<Box width={size} height={size}>
			<img
				style={{ objectFit: 'cover', borderRadius: '50%' }}
				width={size}
				height={size}
				alt='user'
				src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
			/>
		</Box>
	);
};

export default UserImage;
