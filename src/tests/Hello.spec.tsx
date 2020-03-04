import * as React from 'react';
import { Hello } from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Hello Component', () => {
  it('is truthy', () => {
    expect(Hello).toBeTruthy();
  });

  it('renders given text properly', () => {
    const name = 'adam';
    const { getByText } = render(<Hello name={name} />);
    expect(getByText(`hello, ${name}`)).toBeInTheDocument();
  });
});
