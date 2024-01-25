import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = () => {
		dispatch(login({ email, password }));
		// Implement your login logic here
		// You may want to make an API request to your server for authentication
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div style={{ textAlign: 'center', marginBottom: '40px' }}>
					<img
						src='../assets/logo.png'
						alt='UniConnect Logo'
						height='90'
						width='90'
						style={{ display: 'block', margin: '0 auto' }}
					/>
					<Typography variant='h3' color='#000000' fontWeight='500'>
						UniConnect
					</Typography>
				</div>

				<Box component='form' noValidate sx={{ mt: 3 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email'
						name='email'
						autoComplete='email'
						autoFocus
						value={email}
						onChange={handleEmailChange}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={password}
						onChange={handlePasswordChange}
					/>
					<Button
						fullWidth
						variant='contained'
						sx={{ backgroundColor: '#FA991C', mt: 3, mb: 2 }}
						onClick={handleLogin}
					>
						Login
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginForm;
