import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from './authSlice';

const RegisterForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Dispatch the register action with the form data
		dispatch(register(formData))
			.unwrap()
			.then(() => navigate('/'));
	};

	return (
		<div>
			<h2>Registration</h2>
			<form onSubmit={handleSubmit}>
				<label>
					First Name:
					<input
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Last Name:
					<input
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
