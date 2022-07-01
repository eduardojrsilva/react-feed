import styled, { css } from 'styled-components';

interface PhotoProps {
  $large: boolean;
  $menuMobile: boolean;
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

  ${({ $menuMobile }) =>
    $menuMobile &&
    css`
      border-radius: 50%;
    `}

  @media (max-width: 850px) {
    width: 40px;
    height: 40px;

    ${({ $large }) =>
      $large &&
      css`
        width: 140px;
        height: 140px;
      `}
  }

  @media (max-width: 450px) {
    ${({ $large }) =>
      $large &&
      css`
        width: 100px;
        height: 100px;
      `}
  }
`;
