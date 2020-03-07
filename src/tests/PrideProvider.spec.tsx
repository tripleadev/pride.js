import * as React from 'react';
import { PrideProvider } from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('PrideProvider', () => {
  it('is truthy', () => {
    expect(PrideProvider).toBeTruthy();
  });

  it('renders without errors', () => {
    const labelText = 'hello world';

    const { getByTestId } = render(
      <PrideProvider theme="dark">
        <p data-testid="test-label">{labelText}</p>
      </PrideProvider>,
    );

    expect(getByTestId('test-label')).toBeInTheDocument();
    expect(getByTestId('test-label').textContent).toBe(labelText);
  });
});
