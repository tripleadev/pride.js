import styled from 'styled-components';

export const HelloText = styled.div`
  @keyframes rainbow {
    0% {
      color: red;
    }
    33% {
      color: green;
    }
    66% {
      color: blue;
    }
  }

  animation: rainbow 3s ease-in-out infinite;
`;
