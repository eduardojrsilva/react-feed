import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const Space = styled.div`
  padding-top: ${convertPixelToRem(10)};
`;
