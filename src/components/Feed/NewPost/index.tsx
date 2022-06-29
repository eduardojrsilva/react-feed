import { ChangeEvent, useState } from 'react';
import { Post, USERS } from '../../../utils/Mocks';
import BagOfWords from '../../BagOfWords';
import { Input } from '../../Input/styles';

import { TextArea } from '../../TextArea/styles';
import { Button, ButtonsContainer, Container, InputWrapper } from './styles';

interface NewPostProps {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

const NewPost: React.FC<NewPostProps> = ({ posts, setPosts }) => {
  const [postContent, setPostContent] = useState('');
  const [isUrlOn, setIsUrlOn] = useState(false);
  const [isTagsOn, setIsTagsOn] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handlePublish = (): void => {
    const post: Post = {
      owner: USERS[0],
      publishedAt: String(Date.now()),
      content: postContent,
      link: url,
      tags,
    };

    setPosts([...posts, post]);

    setPostContent('');
    setUrl('');
    setTags([]);
    setIsUrlOn(false);
    setIsTagsOn(false);
  };

  const handleChangePostContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setPostContent(event.target.value);
  };

  const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
  };

  const handleToggleUrl = (): void => {
    setIsUrlOn((pastValue) => !pastValue);
    setUrl('');
  };

  const handleToggleTags = (): void => {
    setIsTagsOn((pastValue) => !pastValue);
    setTags([]);
  };

  return (
    <Container>
      <TextArea
        rows={5}
        value={postContent}
        onChange={handleChangePostContent}
        placeholder="Que tal publicar alguma coisa? Digite algo aqui..."
      />
      {postContent.length !== 0 && (
        <>
          {isUrlOn && (
            <InputWrapper>
              <label htmlFor="url">URL: </label>
              <Input id="url" value={url} onChange={handleChangeUrl} />
              <button type="button" onClick={handleToggleUrl}>
                x
              </button>
            </InputWrapper>
          )}
          {isTagsOn && (
            <InputWrapper>
              <label htmlFor="bag-of-words">Tags: </label>
              <BagOfWords tags={tags} setTags={setTags} />
              <button type="button" onClick={handleToggleTags}>
                x
              </button>
            </InputWrapper>
          )}
          <ButtonsContainer>
            <div>
              {!isUrlOn && (
                <button type="button" onClick={handleToggleUrl}>
                  Anexar URL
                </button>
              )}
              {!isTagsOn && (
                <button type="button" onClick={handleToggleTags}>
                  Adicionar tags
                </button>
              )}
            </div>
            <Button type="button" onClick={handlePublish}>
              Publicar
            </Button>
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
};

export default NewPost;
