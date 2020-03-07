import { DefaultTheme } from 'styled-components';
export declare const theme: {
    colors: {
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
        darkGreen: string;
        green: string;
        lightGreen: string;
        darkBlue: string;
        blue: string;
        lightBlue: string;
        purpule: string;
        lightPurpule: string;
        black: string;
    };
    mq: {
        mobile: string;
        small: string;
        medium: string;
        large: string;
    };
};
export interface PrideTheme extends DefaultTheme {
    bg: string;
    fg: string;
    mode: 'dark' | 'light';
    colors: {
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
    };
    mq: {
        mobile: string;
        small: string;
        medium: string;
        large: string;
    };
}
