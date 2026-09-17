import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daraz Clone app', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Daraz Clone/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
  
  const subheading = screen.getByRole('heading', { name: /Shop the Best Deals/i });
  expect(subheading).toBeInTheDocument();
});
