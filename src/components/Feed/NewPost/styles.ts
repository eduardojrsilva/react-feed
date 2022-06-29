import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  background: ${theme.colors.gray800};
  padding: 10px;
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

  button {
    background: ${theme.colors.gray600};
    color: ${theme.colors.gray400};
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    :hover {
      background: ${theme.colors.red500};
      color: ${theme.colors.white};
    }
  }
`;
