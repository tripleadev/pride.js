import styled from 'styled-components';
import { PrideTheme } from '../theme';

export const HelloText = styled.div`
  @keyframes rainbow {
    0% {
      color: ${props => (props.theme as PrideTheme).colors.red};
    }
    33% {
      color: ${props => (props.theme as PrideTheme).colors.blue};
    }
    66% {
      color: ${props => (props.theme as PrideTheme).colors.green};
    }
    100% {
      color: ${props => (props.theme as PrideTheme).colors.red};
    }
  }

  animation: rainbow 3s ease-in-out infinite;
  font-weight: bold;
  font-size: 3em;
  color: ${props => (props.theme as PrideTheme).colors.red};
`;
