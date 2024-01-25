import React from 'react';
import FlexBetween from '../../../common/FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import UserImage from './ProfileImage';

const ProfileHeader = () => {
	const { user } = useSelector((state) => state.auth);

	return (
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
		</FlexBetween>
	);
};

export default ProfileHeader;
