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
    const headings = [
      render(<Heading size={1}></Heading>),
      render(<Heading size={2}></Heading>),
      render(<Heading size={3}></Heading>),
      render(<Heading size={4}></Heading>),
      render(<Heading size={5}></Heading>),
      render(<Heading size={6}></Heading>),
    ];

    headings.map(({container}, i) => expect(container.querySelector(`h${i+1}`)).toBeInTheDocument());
  });
});