import styled from 'styled-components';
import { getColor } from '../../helpers/getColor';
import { PrideTheme } from '../theme';
import { ButtonProps } from './Button';
import { modifyColor as modify } from '../../helpers/modifyColor';

export const PrideButton = styled.button<ButtonProps>`
  display: inline-block;
  outline: none;
  padding: 10px 15px;
  background-color: ${props =>
    props.mode === 'contained'
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).bg};
  border: 2px solid ${props => getColor(props.theme, props.color)};
  color: ${props =>
    props.mode === 'contained'
      ? 'white'
      : modify('darken', getColor(props.theme, props.color), 0.5)};
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  :hover {
    background-color: ${props =>
      props.mode === 'contained'
        ? modify('darken', getColor(props.theme, props.color), 0.5)
        : modify('alpha', getColor(props.theme, props.color), 0.15)};
    border-color: ${props =>
      props.mode === 'contained' && modify('darken', getColor(props.theme, props.color), 0.5)};
  }
`;
