import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const StyledHeader = styled.header`
  background: ${theme.colors.gray800};
  color: ${theme.colors.gray100};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    height: ${convertPixelToRem(80)};
    margin: 0 auto;

    h1 {
      color: ${theme.colors.gray100};
    }

    button {
      background: transparent;
      color: inherit;
      border: 0;

      :hover {
        color: ${theme.colors.white};
        text-decoration: underline;
      }
    }

    img {
      display: none;
    }

    @media (max-width: 1100px) {
      max-width: 90%;
    }

    @media (max-width: 850px) {
      button {
        display: none;
      }

      img {
        display: flex;
      }
    }
  }
`;
