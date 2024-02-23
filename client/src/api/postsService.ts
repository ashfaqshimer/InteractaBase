import api from './axiosInstance';

interface PostData {
  content: string;
}

const POSTS_URL = '/api/v1/posts';

export const createPost = async (postData: PostData) => {
  try {
    const response = await api.post(`${POSTS_URL}/create`, postData);
    return response;
  } catch (error: any) {
    let errorMsg: string | undefined;
    if (error.response?.data?.errors) {
      errorMsg = error.response?.data?.errors.join(', ');
    }
    if (error.response?.data?.error) {
      errorMsg = error.response?.data?.error;
    }
    throw new Error(errorMsg || 'Error creating post');
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get(POSTS_URL);
    return response;
  } catch (error: any) {
    let errorMsg: string | undefined;
    if (error.response?.data?.errors) {
      errorMsg = error.response?.data?.errors.join(', ');
    }
    if (error.response?.data?.error) {
      errorMsg = error.response?.data?.error;
    }
    throw new Error(errorMsg || 'Error fetching posts');
  }
};
