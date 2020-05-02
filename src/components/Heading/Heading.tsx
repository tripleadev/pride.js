import * as React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  switch (props.size) {
    case 2:
      return <h2>{children}</h2>
      break;

    case 3:
      return <h3>{children}</h3>
      break;

    case 4:
      return <h4>{children}</h4>
      break;

    case 5:
      return <h5>{children}</h5>
      break;

    case 6:
      return <h6>{children}</h6>
      break;

    default:
      return <h1>{children}</h1>
      break;
  }
}