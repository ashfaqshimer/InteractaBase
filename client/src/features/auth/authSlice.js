import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authService';

const initialState = {
	user: null,
	isAuthenticated: false,
	status: 'idle',
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearUser: (state) => {
			state.user = null;
			state.isAuthenticated = false;
			localStorage.removeItem('userInfo');
		},
	},
	extraReducers(builder) {
		builder
			.addCase(login.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				console.log("🚀 ~ .addCase ~ payload:", payload)
				state.status = 'succeeded';
				state.user = payload.data;
				state.error = null;
				localStorage.setItem('user', JSON.stringify(payload.token));
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const login = createAsyncThunk('auth/login', async (requestBody) => {
	const response = await loginUser(requestBody);
	return response.data;
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
