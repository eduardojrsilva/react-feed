import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from '../../components/Feed/Post';
import PageWrapper from '../../components/PageWrapper';

import { Post as PostType } from '../../model/Post';
import api from '../../services/api';

import { Container, Separator, Title } from './styles';

interface Params {
  tag: string;
}

const Tags: React.FC = () => {
  const { tag }: Params = useParams();
  const [posts, setPosts] = useState<PostType[]>();

  const getPosts = useCallback(async () => {
    const { data } = await api.get<PostType[]>(`/post/${tag}`);

    setPosts(data);
  }, [tag]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Title>
          Publicações relacionadas a <span>{tag}</span>
        </Title>

        {!posts?.length ? (
          <span>Não foi encontrada nenhuma publicação relacionada</span>
        ) : (
          <>
            {posts.map((post, index) => (
              <div key={post.id}>
                <Post post={post} linkToProfile />
                {posts.length !== index + 1 && <Separator />}
              </div>
            ))}
          </>
        )}
      </Container>
    </PageWrapper>
  );
};

export default Tags;
