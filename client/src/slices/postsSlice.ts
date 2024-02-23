import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPost as createPostService, getPosts as getPostsService } from '@/services/postsService';

interface PostState {
  posts: any[]; // Define your post type
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData: any) => {
    const response = await createPostService(postData);
    return response.data;
  },
);

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await getPostsService();
    return response.data;
  },
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        // Handle adding the new post to the state
        state.posts.push(payload.data);
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.posts = payload.data;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: PayloadAction<{ error: { message: string } }>) => {
          state.status = 'failed';
          state.error = action.error.message;
        },
      );
  },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
