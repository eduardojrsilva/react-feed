import { useState } from 'react';
import { Post as PostType, POSTS } from '../../utils/Mocks';
import NewPost from './NewPost';
import Post from './Post';
import { Container } from './styles';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>(POSTS);

  return (
    <Container>
      <NewPost posts={posts} setPosts={setPosts} />
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Container>
  );
};

export default Feed;
