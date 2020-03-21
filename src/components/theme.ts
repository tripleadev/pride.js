import { DefaultTheme } from 'styled-components';

export const theme = {
  colors: {
    gray: { 1: '#333333', 2: '#4f4f4f', 3: '#828282', 4: '#bdbdbd', 5: '#e0e0e0', 6: '#f2f2f2' },
    red: '#eb5757',
    orange: '#f2994a',
    yellow: '#f2c94c',
    darkGreen: '#219653',
    green: '#27ae60',
    lightGreen: '#6fcf97',
    darkBlue: '#2f80ed',
    blue: '#2d9cdb',
    lightBlue: '#56ccf2',
    purpule: '#9b51e0',
    lightPurpule: '#bb6bd9',
    black: '#000000',
  },

  mq: {
    mobile: '@media (max-width: 575.98px)',
    small: '@media (max-width: 767.98px)',
    medium: '@media (max-width: 991.98px)',
    large: '@media (max-width: 1199.98px)',
  },
};

export interface PrideColors {
  gray: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
  red: string;
  orange: string;
  yellow: string;
  lightGreen: string;
  green: string;
  darkGreen: string;
  lightBlue: string;
  blue: string;
  darkBlue: string;
  purpule: string;
  lightPurpule: string;
  black: string;
}

export interface PrideTheme extends DefaultTheme {
  bg: string;
  fg: string;
  mode: 'dark' | 'light';

  colors: PrideColors;

  mq: {
    mobile: string;
    small: string;
    medium: string;
    large: string;
  };
}
