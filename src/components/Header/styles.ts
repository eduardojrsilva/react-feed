import styled from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

import { theme } from '../../styles/theme';

export const StyledHeader = styled.header`
  background: ${theme.colors.gray800};
  color: ${theme.colors.gray100};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    height: ${convertPixelToRem(80)};
    margin: 0 auto;

    h1 {
      color: ${theme.colors.gray100};
    }

    > button {
      background: transparent;
      color: inherit;
      border: 0;

      :hover {
        color: ${theme.colors.white};
        text-decoration: underline;
      }

      @media (max-width: 850px) {
        :first-of-type {
          display: none;
        }
      }
    }

    @media (max-width: 1100px) {
      max-width: 90%;
    }
  }
`;

export const MenuMobile = styled.button`
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: ${convertPixelToRem(65)};
  right: 5vw;
  width: 100px;
  background: ${theme.colors.gray800};
  border-radius: 8px;
  border: 1px solid ${theme.colors.green500};
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  button,
  a {
    ${flex.middle}
    background: transparent;
    padding: 3px;
    border: 0;
    color: white;

    :hover {
      background: ${theme.colors.gray700};
      color: ${theme.colors.green300};
    }
  }
`;
