import * as React from 'react';
import { PrideCard } from './Card.styles';

export const Card: React.FC = ({ children, ...props }) => (
  <PrideCard {...props}>{children}</PrideCard>
);