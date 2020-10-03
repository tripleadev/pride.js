/// <reference types="react" />
import * as React from "react";
declare const Hello: React.FC;
interface PrideProviderProps {
    theme?: "light" | "dark";
}
declare const PrideProvider: React.FC<PrideProviderProps>;
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    mode?: "contained" | "outlined";
}
declare const Button: React.FC<ButtonProps>;
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}
declare const Heading: React.FC<HeadingProps>;
declare const theme: {
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
export { Hello, PrideProvider, Button, Heading, theme };
