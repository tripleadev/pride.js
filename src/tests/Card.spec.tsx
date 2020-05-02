import * as React from 'react';
import { Card } from '../components/Card/Card';
import { renderWithTheme as render } from './renderWithTheme';
import '@testing-library/jest-dom/extend-expect';

describe('Card', () => {
  it('is truthy', () => {
    expect(Card).toBeTruthy();
  });

  it('renders example text', () => {
    const text = 'lorem ipsum';
    const { getByText } = render(<Card>{text}</Card>);
    expect(getByText(text)).toBeInTheDocument();
  });
});