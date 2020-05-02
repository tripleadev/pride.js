import * as React from 'react';
export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}
export declare const Header: React.FC<HeaderProps>;
