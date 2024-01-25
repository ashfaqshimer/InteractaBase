import React, { useEffect } from 'react';
import LoginForm from '../features/auth/LoginForm';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
					<LoginForm />
				</Box>
			</Box>
		</div>
	);
};

export default LoginPage;
