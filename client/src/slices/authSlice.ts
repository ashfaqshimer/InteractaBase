import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setAuthToken } from '../lib/utils';
import { loginUser, logoutUser, registerUser } from '@/services/authService';

interface AuthState {
  user: Record<string, unknown> | null;
  isAuthenticated: boolean | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null,
  isAuthenticated: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (requestBody: any) => {
    const response = await loginUser(requestBody);
    return response.data;
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (requestBody: any) => {
    const response = await registerUser(requestBody);
    return response.data;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await logoutUser();
  return response.data;
});

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
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('token', JSON.stringify(payload.token));
        localStorage.setItem('user', JSON.stringify(payload.data));
        setAuthToken(localStorage.token);
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = payload.data;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('token', JSON.stringify(payload.token));
        localStorage.setItem('user', JSON.stringify(payload.data));
        setAuthToken(localStorage.token);
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthToken(localStorage.token);
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: PayloadAction<any>) => {
          state.status = 'failed';
          state.error = action.error.message;
        },
      );
  },
});

export const { clearUser } = authSlice.actions;

export default authSlice.reducer;
