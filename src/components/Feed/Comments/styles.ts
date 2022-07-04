import styled, { css } from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.gray700};
  border-radius: 8px;
  padding: 15px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    strong {
      color: ${theme.colors.gray100};
    }

    time {
      color: ${theme.colors.gray400};
      font-size: ${convertPixelToRem(14)};
    }
  }

  > button {
    background: transparent;
    border: 0;
    color: ${theme.colors.gray100};
    transition: background-color 0.2s;

    :hover {
      color: ${theme.colors.red500};
    }
  }
`;

interface LikeContainerProps {
  $activeLike: boolean;
}

export const LikeContainer = styled.div<LikeContainerProps>`
  display: flex;
  gap: 5px;

  button {
    background: transparent;
    border: 0;
    color: ${theme.colors.gray100};

    :hover {
      color: ${theme.colors.green300};
    }

    ${({ $activeLike }) =>
      $activeLike &&
      css`
        color: ${theme.colors.green500};
      `}
  }
`;
