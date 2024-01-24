import React, { useEffect } from 'react';
import LoginForm from '../features/auth/LoginForm';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [navigate, user]);

	return (
		<div>
			<Box>
				<Box
					width={'93%'}
					p='1rem 1rem 1rem 1rem'
					m='2rem auto'
					borderRadius='1.5rem'
					backgroundColor={theme.palette.background.alt}
				>
					<Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
						Welcome to UniConnect, Login into your UniConnect Account!
					</Typography>
					<LoginForm />
				</Box>
			</Box>
		</div>
	);
};

export default LoginPage;
