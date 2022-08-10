import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';

import { useAuth } from '../../providers/Auth';

import { Post as PostType } from '../../model/Post';

import { Container } from './styles';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const { user } = useAuth();

  return (
    <Container>
      <NewPost />
      {posts
        .filter((post) => post.owner !== user)
        .map((post) => (
          <Post post={post} linkToProfile key={post.id} />
        ))}
    </Container>
  );
};

export default Feed;
