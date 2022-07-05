import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: ${convertPixelToRem(30)};
  overflow: hidden;

  @media (max-width: 750px) {
    padding-right: ${convertPixelToRem(10)};
  }
`;
