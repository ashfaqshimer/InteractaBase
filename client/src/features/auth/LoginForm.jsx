import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

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

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const handleLogin = () => {
		// Implement your login logic here
		dispatch(login({ email, password }));
		// You may want to make an API request to your server for authentication
	};

	return (
		<div>
			<h2>Login</h2>
			<form>
				<label>
					Email:
					<input type='email' value={email} onChange={handleEmailChange} />
				</label>
				<br />
				<label>
					Password:
					<input
						type='password'
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<button type='button' onClick={handleLogin}>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
