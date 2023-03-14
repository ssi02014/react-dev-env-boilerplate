import { render, screen } from '@testing-library/react';
import Home from '.';

test('Home Test', () => {
  render(<Home />);
  const test = screen.getByText('환경 변수 테스트');
  expect(test).toBeInTheDocument();
});
