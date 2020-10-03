import { PrideTheme } from '../components/theme';
import _ from 'lodash';

export function getColor(theme: PrideTheme, color?: string) {
  if (color && !_.has(theme.colors, color)) {
    throw new Error(`Given color is not valid. Give name of one of predefined pride.js colors`);
  }
  return color ? _.get(theme.colors, color, theme.colors.gray['1']) : theme.colors.red;
}
