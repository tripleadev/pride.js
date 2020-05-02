import styled from 'styled-components';
import { getColor } from '../../helpers/getColor';
import { PrideTheme } from '../theme';

export const PrideCard = styled.div`
  color: ${props =>
    props.color
      ? getColor(props.theme, props.color)
      : (props.theme as PrideTheme).colors.black};
  background-color: ${props => (props.theme as PrideTheme).bg};
  border: .5px solid ${props => (props.theme as PrideTheme).colors.gray[1]};
  border-radius: 5px;
  padding: 15px 10px;
`;