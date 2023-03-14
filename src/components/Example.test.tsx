import { render, screen } from '@testing-library/react';
import Example from './Example';

test('Example Test', () => {
  render(<Example value="zzz" />);
  const test = screen.getByText('zzz');
  expect(test).toBeInTheDocument();
});
