import * as React from 'react';
import { HelloText } from './Hello.styles';

export const Hello: React.FC = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error(`You can only pass a string as Hello's children`);
  }
  return <HelloText>hello, {children}</HelloText>;
};
