import { createGlobalStyle } from 'styled-components';
import { PrideTheme } from '../theme';

import './GlobalStyles.css';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${props => (props.theme as PrideTheme).bg};
    color: ${props => (props.theme as PrideTheme).fg}
  }
`;
