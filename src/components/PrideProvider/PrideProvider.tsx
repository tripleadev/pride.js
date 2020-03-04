import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

export interface PrideTheme extends DefaultTheme {
  bg: string;
  fg: string;

  mq: {
    mobile: string;
    small: string;
    medium: string;
    large: string;
  };
}

export interface PrideProviderProps {
  theme?: 'light' | 'dark';
}

export const PrideProvider: React.FC<PrideProviderProps> = ({
  children,
  theme: mode = 'light',
}) => {
  const theme: PrideTheme = {
    bg: mode === 'light' ? 'white' : 'black',
    fg: mode === 'light' ? 'white' : 'black',

    mq: {
      mobile: '@media (max-width: 575.98px)',
      small: '@media (max-width: 767.98px)',
      medium: '@media (max-width: 991.98px)',
      large: '@media (max-width: 1199.98px)',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
