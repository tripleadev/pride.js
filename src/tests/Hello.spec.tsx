import * as React from 'react';
import { Hello } from '../';
import { renderWithTheme as render } from './renderWithTheme';
import '@testing-library/jest-dom/extend-expect';

describe('Hello Component', () => {
  it('is truthy', () => {
    expect(Hello).toBeTruthy();
  });

  it('renders given text', () => {
    const name = 'adam';
    const { getByText } = render(<Hello>{name}</Hello>);
    expect(getByText(`hello, ${name}`)).toBeInTheDocument();
  });
});
