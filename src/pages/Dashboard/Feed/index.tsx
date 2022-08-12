import { useCallback, useEffect, useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';

import { Post as PostType } from '../../../model/Post';

import { Container } from './styles';
import api from '../../../services/api';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = useCallback(async () => {
    const { data } = await api.get<PostType[]>('/post/feed');

    setPosts(data);
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NewPost />
      {posts.map((post) => (
        <Post post={post} linkToProfile key={post.id} />
      ))}
    </Container>
  );
};

export default Feed;
