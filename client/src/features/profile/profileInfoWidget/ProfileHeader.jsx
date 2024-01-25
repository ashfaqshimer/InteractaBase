import React from 'react';
import FlexBetween from '../../../common/FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import UserImage from './ProfileImage';
import { ManageAccountsOutlined } from '@mui/icons-material';

const ProfileHeader = () => {
	const { user } = useSelector((state) => state.auth);

	return (
		<FlexBetween
			gap='0.5rem'
			pb='1.1rem'
			onClick={() => navigate(`/profile/${userId}`)}
		>
			<FlexBetween gap='1rem'>
				<UserImage image={'picturePath.png'} />
				<Box>
					<Typography
						variant='h4'
						color='black'
						fontWeight='500'
						sx={{
							'&:hover': {
								color: 'orange',
								cursor: 'pointer',
							},
						}}
					>
						{user.firstName} {user.lastName}
					</Typography>
				</Box>
				<ManageAccountsOutlined sx={{ color: '#1C768F' }} />
			</FlexBetween>
		</FlexBetween>
	);
};

export default ProfileHeader;
