import { Box, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '../../../common/FlexBetween';
import { EditOutlined, LinkedIn, Twitter } from '@mui/icons-material';

const SocialProfiles = () => {
	return (
		<Box p='1rem 0'>
			<Typography fontSize='1rem' color='black' fontWeight='500' mb='1rem'>
				Social Profiles
			</Typography>

			<FlexBetween gap='1rem' mb='0.5rem'>
				<FlexBetween gap='1rem'>
					<Twitter sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography color='black' fontWeight='500'>
							Twitter
						</Typography>
						<Typography color='#A3A3A3'>{'Twitter Url Here'}</Typography>
					</Box>
				</FlexBetween>
				<EditOutlined sx={{ color: 'black' }} />
			</FlexBetween>

			<FlexBetween gap='1rem'>
				<FlexBetween gap='1rem'>
					<LinkedIn sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography color='black' fontWeight='500'>
							Linkedin
						</Typography>
						<Typography color='#A3A3A3'>{'Linkedin Url Here'}</Typography>
					</Box>
				</FlexBetween>
				<EditOutlined sx={{ color: 'black' }} />
			</FlexBetween>
		</Box>
	);
};

export default SocialProfiles;
