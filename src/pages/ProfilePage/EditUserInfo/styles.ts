import styled, { css } from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

import { theme } from '../../../styles/theme';

export const EditInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 850px) {
    div {
      align-items: stretch;
    }
  }
`;

export const NameRoleWrapper = styled.div`
  gap: 40px;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
  }
`;

interface LabelInputWrapperProps {
  $column?: boolean;
}

export const LabelInputWrapper = styled.div<LabelInputWrapperProps>`
  display: flex;

  label {
    white-space: nowrap;
    margin-right: ${convertPixelToRem(10)};
  }

  @media (max-width: 850px) {
    flex-direction: column;

    label {
      align-self: flex-start;
      margin-bottom: ${convertPixelToRem(5)};
    }
  }

  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;

      label {
        align-self: flex-start;
        margin-bottom: ${convertPixelToRem(5)};
      }
    `}
`;

export const ButtonsContainer = styled.div`
  ${flex.middle};
  margin-top: ${convertPixelToRem(30)};
  margin-bottom: ${convertPixelToRem(30)};
  gap: 50px;

  button {
    padding: 10px 25px;
    border-radius: 8px;
    background: transparent;
    font-weight: bold;

    transition: background-color 0.1s;

    border: 1px solid ${theme.colors.green500};
    color: ${theme.colors.green500};

    :hover {
      background-color: ${theme.colors.green500};
      color: ${theme.colors.white};
    }

    :first-child {
      border: 1px solid ${theme.colors.red500};
      color: ${theme.colors.red500};

      :hover {
        background-color: ${theme.colors.red500};
        color: ${theme.colors.white};
      }
    }
  }

  @media (max-width: 850px) {
    gap: 20px;
  }
`;
