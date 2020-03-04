import * as React from 'react';

export type HelloProps = {
  name: String;
};

export const Hello: React.SFC<HelloProps> = ({ name }) => {
  return (
    <div>
      <div>hello, {name}</div>
    </div>
  );
};
