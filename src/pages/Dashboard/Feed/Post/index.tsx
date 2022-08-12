import { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiMessageCircle, FiThumbsUp } from 'react-icons/fi';

import Avatar from '../../../../components/Avatar';
import Comment from '../Comments';
import { TextArea } from '../../../../components/TextArea/styles';

import { useToast } from '../../../../providers/Toast';
import { useAuth } from '../../../../providers/Auth';
import api from '../../../../services/api';

import { Post as PostType } from '../../../../model/Post';

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
  const [activeComment, setActiveComment] = useState(false);
  const [postComment, setPostComment] = useState('');

  const { addToast } = useToast();
  const { user } = useAuth();

  const [activeLike, setActiveLike] = useState(
    post.likes.some((like) => like.owner.id === user.id),
  );

  const publishedAtDateFormatted = format(Date.parse(post.published_at), "d 'de' LLLL 'às' HH:mm", {
    locale: pt,
  });

  const publishedAtDistanceToNow = formatDistanceToNow(Date.parse(post.published_at), {
    locale: pt,
    addSuffix: true,
  });

  const handleLike = useCallback(async () => {
    try {
      await api.post('post/like', {
        id_post: post.id,
      });

      // eslint-disable-next-line no-param-reassign
      post.likes.length += activeLike ? -1 : 1;

      setActiveLike(!activeLike);
    } catch {
      addToast({
        title: 'Erro',
        description: 'Erro ao dar like no post',
        type: 'error',
      });
    }
  }, [addToast, post.id, post.likes, activeLike]);

  const handleOpenCloseComment = (): void => {
    setActiveComment(!activeComment);
  };

  const handleChangePostComment = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setPostComment(event.target.value);
  };

  const handleComment = useCallback(async () => {
    try {
      await api.post('comment', {
        id_post: post.id,
        message: postComment,
      });

      setPostComment('');
    } catch {
      addToast({
        title: 'Erro',
        description: 'Erro ao adicionar comentário',
        type: 'error',
      });
    }
  }, [addToast, post.id, postComment]);

  return (
    <Container>
      <PostHeader>
        <Identification>
          <Avatar avatarUrl={post.owner.avatar} />
          <NameRoleWrapper>
            {linkToProfile ? (
              <Link to={`../profile/${post.owner.id}`}>
                <strong>{post.owner.name}</strong>
              </Link>
            ) : (
              <strong>{post.owner.name}</strong>
            )}
            <span>{post.owner.role}</span>
          </NameRoleWrapper>
        </Identification>

        <time title={publishedAtDateFormatted} dateTime={post.published_at.toString()}>
          Publicado {publishedAtDistanceToNow} atrás
        </time>
      </PostHeader>
      <PostContent>
        {post.content.split('\n').map((line) => (
          <div key={`${post.id}-${line}`}>
            <span>{line}</span>
            <br />
          </div>
        ))}
        {(post.tags || post.link) && (
          <Links>
            {post.link && (
              <>
                <span>👉 </span>
                <a href={post.link} target="_blank" rel="noreferrer">
                  {post.link}
                </a>
              </>
            )}
            <Tags>
              {post.tags?.map((tag) => (
                <a href={`/tags/${tag}`} key={`${post.id}-${tag} `}>
                  #{tag}
                </a>
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

          <span>{post.likes.length}</span>
        </div>
        <div>
          <button type="button" onClick={handleOpenCloseComment}>
            <FiMessageCircle />
          </button>

          <span>{post.comments?.length}</span>
        </div>
      </InteractionsBar>

      {activeComment && (
        <CommentsContainer>
          <strong>Deixe seu feedback</strong>
          <TextArea
            value={postComment}
            onChange={handleChangePostComment}
            rows={3}
            placeholder="Escreva um comentário..."
          />
          {postComment.length !== 0 && (
            <button type="button" onClick={handleComment}>
              Comentar
            </button>
          )}
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </CommentsContainer>
      )}
    </Container>
  );
};

export default Post;
