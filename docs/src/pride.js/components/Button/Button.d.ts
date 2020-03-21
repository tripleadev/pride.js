import * as React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    mode?: 'contained' | 'outlined';
}
export declare const Button: React.FC<ButtonProps>;
