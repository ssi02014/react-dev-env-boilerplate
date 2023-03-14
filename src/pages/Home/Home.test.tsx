import { render, screen } from '@testing-library/react';
import Home from '.';

test('Renders main element', () => {
  render(<Home />);
  const test = screen.getByText('환경 변수 테스트');
  expect(test).toBeInTheDocument();
});
