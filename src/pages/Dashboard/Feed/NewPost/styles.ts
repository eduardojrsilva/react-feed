import styled, { css } from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

import { theme } from '../../../../styles/theme';

interface ContainerProps {
  $profile: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  background: ${theme.colors.gray800};
  ${({ $profile }) =>
    !$profile &&
    css`
      padding: 10px;
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-top: 10px;

  div {
    button {
      background: transparent;
      border: 0;
      color: ${theme.colors.green500};

      :hover {
        color: ${theme.colors.green300};
        text-decoration: underline;
      }
    }

    button + button {
      margin-left: 20px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background: ${theme.colors.green500};
  color: ${theme.colors.gray100};
  padding: 10px 20px;
  height: max-content;
  border-radius: 5px;
  border: 0;
  transition: background-color 0.2s;

  :hover {
    background: ${theme.colors.green300};
    color: ${theme.colors.white};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: ${theme.colors.gray100};

  label {
    width: ${convertPixelToRem(40)};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    button {
      flex-shrink: 0;
      background: ${theme.colors.gray600};
      color: ${theme.colors.gray400};
      border: 0;
      border-radius: 50%;
      width: 20px;
      height: 20px;

      :hover {
        background: ${theme.colors.red500};
        color: ${theme.colors.white};
      }
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 5px;

    label {
      align-self: flex-start;
    }
  }
`;
