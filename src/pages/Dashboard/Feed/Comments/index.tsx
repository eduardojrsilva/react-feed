import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiThumbsUp, FiTrash2 } from 'react-icons/fi';

import Avatar from '../../../../components/Avatar';

import { useAuth } from '../../../../providers/Auth';
import { useToast } from '../../../../providers/Toast';
import api from '../../../../services/api';

import { Comment as CommentType } from '../../../../model/Comment';

import { CommentContainer, Container, Content, ContentHeader, LikeContainer } from './styles';

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [activeLike, setActiveLike] = useState(
    comment.likes.some((like) => like.owner.id === user.id),
  );

  const publishedAtDateFormatted = format(
    Date.parse(comment.published_at),
    "d 'de' LLLL 'às' HH:mm",
    {
      locale: pt,
    },
  );

  const publishedAtDistanceToNow = formatDistanceToNow(Date.parse(comment.published_at), {
    locale: pt,
    addSuffix: true,
  });

  const handleLike = useCallback(async () => {
    try {
      await api.post('comment/like', {
        id_comment: comment.id,
      });

      // eslint-disable-next-line no-param-reassign
      comment.likes.length += activeLike ? -1 : 1;

      setActiveLike(!activeLike);
    } catch {
      addToast({
        title: 'Erro',
        description: 'Erro ao dar like no comentário',
        type: 'error',
      });
    }
  }, [addToast, comment.id, comment.likes, activeLike]);

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

              <time title={publishedAtDateFormatted} dateTime={comment.published_at.toString()}>
                {publishedAtDistanceToNow} atrás
              </time>
            </div>

            {user.id === comment.owner.id && (
              <button type="button" onClick={handleDeleteComment}>
                <FiTrash2 />
              </button>
            )}
          </ContentHeader>

          {comment.message.split('\n').map((line) => (
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
          <span>{comment.likes.length}</span>
        </LikeContainer>
      </CommentContainer>
    </Container>
  );
};

export default Comment;
