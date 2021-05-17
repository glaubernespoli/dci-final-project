import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1Text = screen.getByText('This is the beginning of something.');
  expect(h1Text).toBeInTheDocument();
});
