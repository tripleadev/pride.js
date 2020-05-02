import * as React from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}
export declare const Heading: React.FC<HeadingProps>;
