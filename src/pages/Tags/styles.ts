import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 30px;
  background: ${theme.colors.gray800};
  color: ${theme.colors.gray100};
  border-radius: 8px;

  > span {
    font-size: ${convertPixelToRem(18)};
    color: ${theme.colors.gray400};
  }
`;

export const Title = styled.h1`
  span {
    color: ${theme.colors.green500};
  }
`;

export const Separator = styled.hr`
  border-top: thin;
  border-color: ${theme.colors.gray700};
  width: 100%;
`;
