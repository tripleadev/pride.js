import * as React from 'react';
import { HelloText } from './Hello.styles';

export interface HelloProps {
  name: String;
}

export const Hello: React.FC<HelloProps> = ({ name }) => <HelloText>hello, {name}</HelloText>;
