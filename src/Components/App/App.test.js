import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders chords and scales', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/chords and scales/i);
  expect(linkElement).toBeInTheDocument();
});
