import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 250px;
  height: max-content;
  border-radius: 8px;
  background: ${theme.colors.gray800};

  @media (max-width: 1100px) {
    width: 200px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Wallpaper = styled.img`
  width: 100%;
  height: ${convertPixelToRem(80)};
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;

  strong {
    margin-top: 20px;
    color: ${theme.colors.gray100};
  }

  span {
    color: ${theme.colors.gray400};
  }
`;

export const ViewProfileContainer = styled.div`
  ${flex.middle}
  border-top: 1px solid ${theme.colors.gray600};
  margin-top: 20px;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 15px 25px;
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

  @media (max-width: 1100px) {
    padding: 5px 15px;
  }
`;
