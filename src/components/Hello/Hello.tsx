import * as React from 'react';
import { HelloText } from './Hello.styles';

export type HelloProps = {
  name: String;
};

export const Hello: React.SFC<HelloProps> = ({ name }) => {
  return (
    <div>
      <HelloText>hello, {name}</HelloText>
    </div>
  );
};
