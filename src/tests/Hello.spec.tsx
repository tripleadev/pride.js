import * as React from 'react';
import { Hello } from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PrideProvider } from '../components/PrideProvider/PrideProvider';

describe('Hello Component', () => {
  it('is truthy', () => {
    expect(Hello).toBeTruthy();
  });

  it('renders given text properly', () => {
    const name = 'adam';
    const { getByText } = render(
      <PrideProvider>
        <Hello>{name}</Hello>
      </PrideProvider>,
    );
    expect(getByText(`hello, ${name}`)).toBeInTheDocument();
  });
});
