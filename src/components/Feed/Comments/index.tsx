import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiThumbsUp, FiTrash2 } from 'react-icons/fi';

import Avatar from '../../Avatar';

import { useAuth } from '../../../providers/Auth';

import { Comment as CommentType } from '../../../model/Comment';

import { CommentContainer, Container, Content, ContentHeader, LikeContainer } from './styles';

interface CommentProps {
  comment: CommentType;
  postId: string;
}

const Comment: React.FC<CommentProps> = ({ comment, postId }) => {
  const [activeLike, setActiveLike] = useState(false);

  const { user } = useAuth();

  const publishedAtDateFormatted = format(comment.publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: pt,
  });

  const publishedAtDistanceToNow = formatDistanceToNow(comment.publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  const handleLike = (): void => {
    // eslint-disable-next-line no-param-reassign
    comment.likesCount += activeLike ? -1 : 1;

    setActiveLike(!activeLike);
  };

  const handleDeleteComment = (): void => {
    // POSTS[postId].comments = POSTS[postId].comments.filter(
    //   (commentToCompare) => commentToCompare !== comment,
    // );
  };

  return (
    <Container>
      <Avatar avatarUrl={comment.owner.avatar} />

      <CommentContainer>
        <Content>
          <ContentHeader>
            <div>
              <Link to={`../profile/${comment.owner.id}`}>
                <strong>{comment.owner.name}</strong>
              </Link>

              <time title={publishedAtDateFormatted} dateTime={comment.publishedAt.toString()}>
                {publishedAtDistanceToNow} atrás
              </time>
            </div>

            {user === comment.owner && (
              <button type="button" onClick={handleDeleteComment}>
                <FiTrash2 />
              </button>
            )}
          </ContentHeader>

          {comment.message.map((line) => (
            <div key={`${comment.id}-${line}`}>
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
