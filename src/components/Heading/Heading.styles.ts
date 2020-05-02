import styled from 'styled-components';
import { getColor } from '../../helpers/getColor';
import { PrideTheme } from '../theme';

export const PrideH1 = styled.h1`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;

export const PrideH2 = styled.h2`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;

export const PrideH3 = styled.h3`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;

export const PrideH4 = styled.h4`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;

export const PrideH5 = styled.h5`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;

export const PrideH6 = styled.h6`
  background-color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).fg};
`;