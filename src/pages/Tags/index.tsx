import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from '../../components/Feed/Post';
import PageWrapper from '../../components/PageWrapper';

import { POSTS } from '../../utils/Mocks';

import { Post as PostType } from '../../model/Post';

import { Container, Separator, Title } from './styles';

interface Params {
  tag: string;
}

const Tags: React.FC = () => {
  const { tag }: Params = useParams();
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    setPosts(
      POSTS.filter((post) => {
        return post.tags?.some((postTag) => postTag === tag);
      }),
    );
  }, [tag]);

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
              <>
                <Post post={post} linkToProfile />
                {posts.length !== index + 1 && <Separator />}
              </>
            ))}
          </>
        )}
      </Container>
    </PageWrapper>
  );
};

export default Tags;
