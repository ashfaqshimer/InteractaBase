import { Box, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '../../../common/FlexBetween';
import {
	Bookmark,
	Calculate,
	ControlPointOutlined,
	Event,
	Groups2,
} from '@mui/icons-material';

const Shortcuts = () => {
	return (
		<Box p='1rem 0'>
			<Typography fontSize='1rem' color={'black'} fontWeight='500' mb='1rem'>
				Shortcuts
			</Typography>

			<FlexBetween gap='1rem' mb='2rem'>
				<FlexBetween gap='1rem'>
					<Bookmark sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography
							color={'black'}
							fontWeight='500'
							onClick={() => navigate('/saved')}
							sx={{
								'&:hover': {
									color: '#1C768F',
									cursor: 'pointer',
								},
							}}
						>
							Saved Items
						</Typography>
					</Box>
				</FlexBetween>
			</FlexBetween>

			<FlexBetween gap='1rem' mb='2rem'>
				<FlexBetween gap='1rem'>
					<Event sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography
							color={'black'}
							fontWeight='500'
							onClick={() => navigate('/events')}
							sx={{
								'&:hover': {
									color: '#1C768F',
									cursor: 'pointer',
								},
							}}
						>
							Events
						</Typography>
					</Box>
				</FlexBetween>
			</FlexBetween>

			<FlexBetween gap='1rem' mb='2rem'>
				<FlexBetween gap='1rem'>
					<Groups2 sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography
							color={'black'}
							fontWeight='500'
							onClick={() => navigate('/group')}
							sx={{
								'&:hover': {
									color: '#1C768F',
									cursor: 'pointer',
								},
							}}
						>
							Groups
						</Typography>
					</Box>
					<ControlPointOutlined
					// onClick={() => setIsCreateGroupFormOpen(true)}
					/>
					{/* {isCreateGroupFormOpen && (
						<CreateGroupForm
							isOpen={isCreateGroupFormOpen}
							onClose={() => setIsCreateGroupFormOpen(false)}
						/>
					)} */}
				</FlexBetween>
			</FlexBetween>
			{/* GPA Calculator Starts from here */}
			<FlexBetween gap='1rem' mb='2rem'>
				<FlexBetween gap='1rem'>
					<Calculate sx={{ color: '#1C768F', fontSize: '2rem' }} />
					<Box>
						<Typography color={'black'} fontWeight='500'>
							GPA Calculator
						</Typography>
					</Box>
				</FlexBetween>
			</FlexBetween>
		</Box>
	);
};

export default Shortcuts;
