import { configureStore } from '@reduxjs/toolkit';

// Import reducers
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
