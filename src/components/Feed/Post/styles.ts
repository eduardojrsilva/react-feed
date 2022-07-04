import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${theme.colors.gray800};
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  font-size: 16px;

  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.gray100};

  time {
    font-size: 14px;
    color: ${theme.colors.gray400};
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Identification = styled.div`
  display: flex;
  align-items: center;
`;

export const NameRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 1rem;

  strong {
    color: ${theme.colors.gray100};
  }

  span {
    font-size: 14px;
    color: ${theme.colors.gray400};
  }
`;

export const PostContent = styled.div`
  color: ${theme.colors.gray300};
`;

export const Links = styled.div`
  margin-top: 30px;

  a {
    color: ${theme.colors.green500};
    font-weight: bold;

    :hover {
      color: ${theme.colors.green300};
      text-decoration: underline;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
`;

interface InteractionsBarProps {
  $activeLike: boolean;
}

export const InteractionsBar = styled.div<InteractionsBarProps>`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    gap: 5px;

    span {
      color: ${theme.colors.gray100};
    }

    button {
      background: transparent;
      border: 0;
      color: ${theme.colors.gray100};

      :hover {
        color: ${theme.colors.green300};
      }
    }

    :first-of-type {
      ${({ $activeLike }) =>
        $activeLike &&
        css`
          button {
            svg {
              color: ${theme.colors.green500};
            }
          }
        `}
    }
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${theme.colors.gray100};
  border-top: 1px solid ${theme.colors.gray600};
  padding-top: 20px;

  > button {
    background: ${theme.colors.green500};
    color: ${theme.colors.gray100};
    padding: 10px 20px;
    width: max-content;
    border-radius: 5px;
    border: 0;
    transition: background-color 0.2s;

    :hover {
      background: ${theme.colors.green300};
      color: ${theme.colors.white};
    }
  }
`;
