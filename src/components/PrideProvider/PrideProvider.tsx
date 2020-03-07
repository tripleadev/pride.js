import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme as defaultTheme, PrideTheme } from '../theme';

export interface PrideProviderProps {
  theme?: 'light' | 'dark';
}

export const PrideProvider: React.FC<PrideProviderProps> = ({
  children,
  theme: mode = 'light',
}) => {
  const theme: PrideTheme = {
    bg: mode === 'light' ? 'white' : defaultTheme.colors.black,
    fg: mode !== 'light' ? 'white' : defaultTheme.colors.black,

    mode,

    ...defaultTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
