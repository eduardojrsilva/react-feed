import { Post as PostType } from '../../../utils/Mocks';
import Avatar from '../../Avatar';
import { TextArea } from '../../TextArea/styles';
import {
  CommentsContainer,
  Container,
  Identification,
  Links,
  NameRoleWrapper,
  PostContent,
  PostHeader,
  Tags,
} from './styles';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Container>
      <PostHeader>
        <Identification>
          <Avatar avatarUrl={post.owner.avatarUrl} />
          <NameRoleWrapper>
            <strong>{post.owner.name}</strong>
            <span>{post.owner.role}</span>
          </NameRoleWrapper>
        </Identification>
        <time>{post.publishedAt}</time>
      </PostHeader>
      <PostContent>
        {post.content.map((line) => (
          <>
            <span>{line}</span>
            <br />
          </>
        ))}
        {(post.tags || post.link) && (
          <Links>
            {post.link && (
              <>
                <span>👉 </span>
                <a href={post.link}>{post.link}</a>
              </>
            )}
            <Tags>
              {post.tags?.map((tag) => (
                <a href={`/tags/${tag}`}>#{tag}</a>
              ))}
            </Tags>
          </Links>
        )}
      </PostContent>
      <CommentsContainer>
        <strong>Deixe seu feedback</strong>
        <TextArea rows={3} placeholder="Escreva um comentário..." />
      </CommentsContainer>
    </Container>
  );
};

export default Post;
