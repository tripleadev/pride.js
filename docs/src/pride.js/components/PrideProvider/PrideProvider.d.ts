import * as React from 'react';
import { DefaultTheme } from 'styled-components';
export interface PrideTheme extends DefaultTheme {
    bg: string;
    fg: string;
    mq: {
        mobile: string;
        small: string;
        medium: string;
        large: string;
    };
}
export interface PrideProviderProps {
    theme?: 'light' | 'dark';
}
export declare const PrideProvider: React.FC<PrideProviderProps>;
