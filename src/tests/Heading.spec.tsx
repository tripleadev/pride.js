import * as React from 'react';
import { Heading } from '../components/Heading/Heading';
import { renderWithTheme as render } from './renderWithTheme';
import '@testing-library/jest-dom/extend-expect';

describe('Heading', () => {
  it('is truthy', () => {
    expect(Heading).toBeTruthy();
  });

  it('renders example text', () => {
    const text = 'lorem ipsum';
    const { getByText } = render(<Heading size={1}>{text}</Heading>);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('renders suitable heading element', () => {
    const { container } = render(
      <>
      <Heading size={1}></Heading>
      <Heading size={3}></Heading>
      <Heading size={6}></Heading>
      </>
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h3')).toBeInTheDocument();
    expect(container.querySelector('h6')).toBeInTheDocument();
  });
});