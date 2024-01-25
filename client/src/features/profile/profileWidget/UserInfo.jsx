import { LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const UserInfo = () => {
	return (
		<Box p='1rem 0'>
			<Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
				<LocationOnOutlined fontSize='large' sx={{ color: '#1C768F' }} />
				<Typography color='#A3A3A3'>{'Replace with user location'}</Typography>
			</Box>
			<Box display='flex' alignItems='center' gap='1rem'>
				<WorkOutlineOutlined fontSize='large' sx={{ color: '#1C768F' }} />
				<Typography color='#A3A3A3'>{'Replace with user occupation'}</Typography>
			</Box>
		</Box>
	);
};

export default UserInfo;
