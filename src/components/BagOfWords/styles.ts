import { convertPixelToRem, getMargin, getScrollbarStyle } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const BagOfWordsContainer = styled.div`
  width: 100%;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  border-radius: 6px;
  background: ${theme.colors.gray900};

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  li {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    color: ${theme.colors.gray300};
    background: ${theme.colors.gray600};
  }
`;

export const TagSpan = styled.div`
  margin-top: ${convertPixelToRem(2)};
`;

export const WordsContainer = styled.div`
  max-height: ${convertPixelToRem(85)};
  overflow-y: auto;
  ${getScrollbarStyle({
    scrollColor: theme.colors.green500,
    backgroundColor: theme.colors.gray600,
  })}
`;

export const InputOfWords = styled.input`
  ${getMargin(10, 0)};
  color: ${theme.colors.gray100};

  border: none;
  font-size: 14px;
  padding: 4px 0 0 0;
  background: transparent;
  &:focus {
    outline: transparent;
  }
`;

export const RemoveTagSpan = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: ${theme.colors.gray400};
  cursor: pointer;

  :hover {
    color: ${theme.colors.red500};
  }
`;
