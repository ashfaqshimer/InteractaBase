import axios from 'axios';

interface LoginDetails {
  email: string;
  password: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AUTH_URL = `${import.meta.env.VITE_API_URL}/api/v1/auth`;

export const loginUser = async (loginDetails: LoginDetails) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, loginDetails);
    return response;
  } catch (error: any) {
    let errorMsg: string | undefined;
    if (error.response?.data?.errors) {
      errorMsg = error.response?.data?.errors.join(', ');
    }
    if (error.response?.data?.error) {
      errorMsg = error.response?.data?.error;
    }
    throw new Error(errorMsg || 'Error logging in');
  }
};

export const registerUser = async (formData: FormData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/register`, formData);
    return response;
  } catch (error: any) {
    let errorMsg: string | undefined;
    if (error.response?.data?.errors) {
      errorMsg = error.response?.data?.errors.join(', ');
    }
    if (error.response?.data?.error) {
      errorMsg = error.response?.data?.error;
    }
    throw new Error(errorMsg || 'Error creating user');
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.get(`${AUTH_URL}/logout`);
    return response;
  } catch (error: any) {
    let errorMsg: string | undefined;
    if (error.response?.data?.errors) {
      errorMsg = error.response?.data?.errors.join(', ');
    }
    if (error.response?.data?.error) {
      errorMsg = error.response?.data?.error;
    }
    throw new Error(errorMsg || 'Error logging out');
  }
};
