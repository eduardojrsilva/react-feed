import { useState } from 'react';
import { FiMessageCircle, FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Post as PostType } from '../../../utils/Mocks';
import Avatar from '../../Avatar';
import { TextArea } from '../../TextArea/styles';
import {
  CommentsContainer,
  Container,
  Identification,
  InteractionsBar,
  Links,
  NameRoleWrapper,
  PostContent,
  PostHeader,
  Tags,
} from './styles';

interface PostProps {
  post: PostType;
  linkToProfile?: boolean;
}

const Post: React.FC<PostProps> = ({ post, linkToProfile = false }) => {
  const [activeLike, setActiveLike] = useState(false);
  const [activeComment, setActiveComment] = useState(false);

  const handleLike = (): void => {
    setActiveLike(!activeLike);
  };

  const handleComment = (): void => {
    setActiveComment(!activeComment);
  };

  return (
    <Container>
      <PostHeader>
        <Identification>
          <Avatar avatarUrl={post.owner.avatarUrl} />
          <NameRoleWrapper>
            {linkToProfile ? (
              <Link to={`../profile/${post.owner.name}`}>
                <strong>{post.owner.name}</strong>
              </Link>
            ) : (
              <strong>{post.owner.name}</strong>
            )}
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

      <InteractionsBar $activeLike={activeLike}>
        <div>
          <button type="button" onClick={handleLike}>
            <FiThumbsUp />
          </button>

          <span>{post.likesCount}</span>
        </div>
        <div>
          <button type="button" onClick={handleComment}>
            <FiMessageCircle />
          </button>

          <span>{post.comments.length}</span>
        </div>
      </InteractionsBar>

      {activeComment && (
        <CommentsContainer>
          <strong>Deixe seu feedback</strong>
          <TextArea rows={3} placeholder="Escreva um comentário..." />
        </CommentsContainer>
      )}
    </Container>
  );
};

export default Post;
