import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  margin-top: ${convertPixelToRem(30)};

  @media (max-width: 1100px) {
    max-width: 90%;
  }
`;
