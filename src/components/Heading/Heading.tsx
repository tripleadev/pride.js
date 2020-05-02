import * as React from 'react';
import { PrideH1, PrideH6, PrideH5, PrideH4, PrideH3, PrideH2 } from './Heading.styles';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  switch (props.size) {
    case 2:
      return <PrideH2>{children}</PrideH2>
      break;

    case 3:
      return <PrideH3>{children}</PrideH3>
      break;

    case 4:
      return <PrideH4>{children}</PrideH4>
      break;

    case 5:
      return <PrideH5>{children}</PrideH5>
      break;

    case 6:
      return <PrideH6>{children}</PrideH6>
      break;

    default:
      return <PrideH1>{children}</PrideH1>
      break;
  }
}