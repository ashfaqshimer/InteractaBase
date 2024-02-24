import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { Post as PostType } from '@/slices/postsSlice';
import { formatDistanceToNow } from 'date-fns';

const Post = ({ post }: { post: PostType }) => {
  const { content, author, createdAt } = post;
  const timeSinceCreation = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });

  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>
          {author.firstName} {author.lastName}
        </CardTitle>
        <CardDescription>{timeSinceCreation}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default Post;
