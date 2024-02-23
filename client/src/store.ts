import { configureStore } from '@reduxjs/toolkit';

// Import reducers
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
