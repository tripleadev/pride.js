import * as React from 'react';
import { Button } from '../components/Button/Button';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('is truthy', () => {
    expect(Button).toBeTruthy();
  });

  it('calls method on click event', () => {
    const method = jest.fn();
    const { getByText } = render(<Button onClick={method}>Test button</Button>);
    fireEvent.click(getByText('Test button'));
    expect(method).toHaveBeenCalled();
  });

  it('outputs given text', () => {
    const text = 'Test button';
    const { getByText } = render(<Button>{text}</Button>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
