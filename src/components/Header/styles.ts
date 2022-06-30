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
    margin: 0 auto;
    padding: 20px;

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

    @media (max-width: 1100px) {
      max-width: 90%;
    }
  }
`;
