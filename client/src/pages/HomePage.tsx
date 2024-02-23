import CreatePost from '@/components/feed/CreatePost';
import Posts from '@/components/feed/Posts';

function HomePage() {
  return (
    <div className="container">
      <CreatePost />
      <Posts />
    </div>
  );
}

export default HomePage;
