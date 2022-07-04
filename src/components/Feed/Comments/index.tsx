import { useState } from 'react';
import { FiThumbsUp, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Comment as CommentType } from '../../../utils/Mocks';
import Avatar from '../../Avatar';
import { CommentContainer, Container, Content, ContentHeader, LikeContainer } from './styles';

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [activeLike, setActiveLike] = useState(false);

  const handleLike = (): void => {
    setActiveLike(!activeLike);
  };

  return (
    <Container>
      <Avatar avatarUrl={comment.owner.avatarUrl} />

      <CommentContainer>
        <Content>
          <ContentHeader>
            <div>
              <Link to={`../profile/${comment.owner.name}`}>
                <strong>{comment.owner.name}</strong>
              </Link>
              <time>{comment.publishedAt}</time>
            </div>

            <button type="button">
              <FiTrash2 />
            </button>
          </ContentHeader>

          {comment.message.map((line) => (
            <div>
              <span>{line}</span>
              <br />
            </div>
          ))}
        </Content>

        <LikeContainer $activeLike={activeLike}>
          <button type="button" onClick={handleLike}>
            <FiThumbsUp />
          </button>
          <span>{comment.likesCount}</span>
        </LikeContainer>
      </CommentContainer>
    </Container>
  );
};

export default Comment;
