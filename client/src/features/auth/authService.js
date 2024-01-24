import axios from 'axios';

const AUTH_URL = `${import.meta.env.VITE_API_URL}/api/v1/auth`;

export const loginUser = async (loginDetails) => {
	try {
		const response = await axios.post(`${AUTH_URL}/login`, loginDetails);
		return response;
	} catch (error) {
		throw new Error(error.response?.data?.error || 'Error logging in');
	}
};

export const registerUser = async (formData) => {
	try {
		const response = await axios.post(`${AUTH_URL}/register`, formData);
		return response;
	} catch (error) {
		let errorMsg;
		if (error.response?.data?.errors) {
			errorMsg = error.response?.data?.errors.join(', ');
		}
		if (error.response?.data?.error) {
			errorMsg = error.response?.data?.error;
		}
		throw new Error(errorMsg || 'Error creating user');
	}
};
