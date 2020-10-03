import * as React from 'react';
import { PrideButton } from './Button.styles';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  mode?: 'contained' | 'outlined';
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <PrideButton {...props}>{children}</PrideButton>
);
