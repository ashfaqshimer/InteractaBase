import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getPosts } from '@/slices/postsSlice';
import { useEffect } from 'react';
import Post from './Post';

function Posts() {
  const { list } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {list.map((post) => (
        <Post />
      ))}
    </div>
  );
}

export default Posts;
