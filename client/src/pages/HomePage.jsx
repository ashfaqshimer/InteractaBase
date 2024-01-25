import React from 'react';
import Navbar from '../common/Navbar';
import ProfileInfoWidget from '../features/profile/profileWidget/ProfileInfoWidget';
import { Box, Container } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	height: '100%',
	paddingTop: '1.5rem',
	paddingBottom: '1.5rem',
});

const FullScreenBox = styled(Box)({
	backgroundColor: '#F6F6F6',
	height: '100vh',
});

const HomePage = () => {
	return (
		<FullScreenBox>
			<Navbar />
			<FullScreenBox>
				<StyledContainer>
					<ProfileInfoWidget />
				</StyledContainer>
			</FullScreenBox>
		</FullScreenBox>
	);
};

export default HomePage;
