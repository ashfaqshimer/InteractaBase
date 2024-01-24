import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authService';
import setAuthToken from '../../common/utils';

const initialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null,
	isAuthenticated: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null,
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
			.addCase(login.fulfilled, (state, { payload }) => {
				state.status = 'succeeded';
				state.user = payload.data;
				state.error = null;
				localStorage.setItem('token', JSON.stringify(payload.token));
				setAuthToken(localStorage.token);
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.status = 'succeeded';
				state.user = payload.data;
				state.error = null;
				localStorage.setItem('token', JSON.stringify(payload.token));
				setAuthToken(localStorage.token);
			})
			.addMatcher(
				// matcher can be defined inline as a type predicate function
				(action) => action.type.endsWith('/pending'),
				(state, action) => {
					state.status = 'loading';
				}
			)
			.addMatcher(
				// matcher can be defined inline as a type predicate function
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.error.message;
				}
			);
	},
});

// Action creators
export const login = createAsyncThunk('auth/login', async (requestBody) => {
	const response = await loginUser(requestBody);
	return response.data;
});

export const register = createAsyncThunk(
	'auth/register',
	async (requestBody) => {
		const response = await registerUser(requestBody);
		return response.data;
	}
);

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
