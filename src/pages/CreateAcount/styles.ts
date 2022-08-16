import styled, { css } from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import { FiLoader } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${convertPixelToRem(20)};
  padding: ${convertPixelToRem(50)} 0;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray100};

  > a {
    color: ${({ theme }) => theme.colors.green500};
    padding-bottom: ${convertPixelToRem(10)};

    :hover {
      color: ${({ theme }) => theme.colors.green300};
    }
  }
`;

export const FormContainer = styled.form`
  ${flex.middle}
  flex-direction: column;
  gap: ${convertPixelToRem(30)};
  width: ${convertPixelToRem(500)};
  padding: 30px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.gray700};

  h1 {
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    width: 80%;
    padding: 30px 0px;
  }
`;

export const LabelInputWrapper = styled.div`
  width: 80%;

  input {
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

interface ButtonProps {
  $isLoading: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.green500};
  background: transparent;

  color: ${({ theme }) => theme.colors.green500};
  font-weight: bold;

  transition: background-color 0.1s;

  :hover {
    background-color: ${({ theme }) => theme.colors.green500};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      background-color: ${({ theme }) => theme.colors.green500};
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.7;
      cursor: not-allowed;
    `}
`;

export const SpaceComponent = styled.div`
  width: 15px;
  height: 15px;
`;

export const Loading = styled(FiLoader)`
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
