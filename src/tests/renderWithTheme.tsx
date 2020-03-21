import * as React from 'react';
import { render } from '@testing-library/react';
import { PrideProvider } from '../components/PrideProvider/PrideProvider';

export const renderWithTheme = (Component: React.ReactFragment) =>
  render(<PrideProvider>{Component}</PrideProvider>);
