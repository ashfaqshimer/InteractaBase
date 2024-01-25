import React from 'react';
import Navbar from '../common/Navbar';
import ProfileInfoWidget from '../features/profile/profileInfoWidget/ProfileInfoWidget';
import FeedWidget from '../features/profile/feedWidget/FeedWidget';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

const FullScreenGrid = styled(Grid)({
	backgroundColor: '#F6F6F6',
	height: '100vh',
});

const HomePage = () => {
	return (
		<FullScreenGrid container spacing={2}>
			<Grid item xs={12}>
				<Navbar />
			</Grid>
			<Grid container justifyContent='space-between' p={2} spacing={2}>
				<Grid item xs={12} md={3}>
					<ProfileInfoWidget />
				</Grid>
				<Grid item xs={12} md={6}>
					<FeedWidget />
				</Grid>
				<Grid item xs={12} md={3}>
					<div>Third Widget</div>
				</Grid>
			</Grid>
		</FullScreenGrid>
	);
};

export default HomePage;
