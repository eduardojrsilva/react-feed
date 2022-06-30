import styled, { css } from 'styled-components';

interface PhotoProps {
  $large: boolean;
}

export const Photo = styled.img<PhotoProps>`
  width: 60px;
  height: 60px;
  border-radius: 8px;

  ${({ $large }) =>
    $large &&
    css`
      width: 175px;
      height: 175px;
    `}
`;
