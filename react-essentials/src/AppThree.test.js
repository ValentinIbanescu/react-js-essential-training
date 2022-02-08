import {render} from '@testing-library/react';
import React from 'react';
import AppThree from './AppThree.js';

test('should render an h1', () => {
  const { getByText } = render(<AppThree />);
  const h1 = getByText(/Hello, React Function for testing library!/);
  expect(h1).toHaveTextContent('Hello, React Function for testing library!');
})
