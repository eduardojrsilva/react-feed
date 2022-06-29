import { useRef, useState } from 'react';

import {
  BagOfWordsContainer,
  InputOfWords,
  RemoveTagSpan,
  TagsContainer,
  TagSpan,
  WordsContainer,
} from './styles';

interface BagOfWordsProps {
  tags: string[];
  setTags(tags: string[]): void;
}

const BagOfWords: React.FC<BagOfWordsProps> = ({ tags, setTags }) => {
  const [tagName, setTagName] = useState('');
  const wordsSectionRef = useRef<HTMLDivElement>(null);
  const bagOfWordsInput = useRef<HTMLInputElement>(null);

  const removeTag = (indexToRemove: number): void => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addNewTag = (): void => {
    const tagToAdd = tagName.trim();

    const shouldAdd = tagToAdd && !tags.find((tag) => tag === tagToAdd);

    if (shouldAdd) setTags([...tags, tagToAdd]);

    setTagName('');

    if (wordsSectionRef.current) {
      wordsSectionRef.current.scrollTop = wordsSectionRef.current.scrollHeight;
    }
  };

  return (
    <BagOfWordsContainer>
      <TagsContainer onClick={() => bagOfWordsInput.current?.focus()}>
        <InputOfWords
          id="bag-of-words"
          value={tagName}
          onChange={({ target }) => setTagName(target.value)}
          onKeyPress={({ key }) => (key === 'Enter' ? addNewTag() : null)}
          placeholder="Digite aqui suas tags, aperte enter para enviar"
          ref={bagOfWordsInput}
        />

        <WordsContainer ref={wordsSectionRef}>
          <ul>
            {tags.map((tag: string, index: number) => (
              <li key={tag}>
                <TagSpan>{tag}</TagSpan>
                <RemoveTagSpan onClick={() => removeTag(index)}>x</RemoveTagSpan>
              </li>
            ))}
          </ul>
        </WordsContainer>
      </TagsContainer>
    </BagOfWordsContainer>
  );
};

export default BagOfWords;
