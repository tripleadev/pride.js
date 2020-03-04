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
    100% {
      color: red;
    }
  }

  animation: rainbow 3s ease-in-out infinite;
  font-weight: bold;
  font-size: 3em;
  color: red;
`;
