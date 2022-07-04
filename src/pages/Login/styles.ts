import styled from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  height: 100%;
  ${flex.middle}
`;

export const FormContainer = styled.form`
  ${flex.middle}
  flex-direction: column;
  gap: ${convertPixelToRem(30)};
  width: ${convertPixelToRem(500)};
  padding: 30px;
  border-radius: 20px;
  background: ${theme.colors.gray700};
  color: ${theme.colors.gray100};

  h1 {
    text-transform: uppercase;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.green500};
    background: transparent;

    color: ${theme.colors.green500};
    font-weight: bold;

    transition: background-color 0.1s;

    :hover {
      background-color: ${theme.colors.green500};
      color: ${theme.colors.white};
    }
  }
`;

export const LabelInputWrapper = styled.div`
  width: 80%;

  input {
    margin-top: 5px;
  }
`;

export const SpaceComponent = styled.div`
  width: 15px;
  height: 15px;
`;
