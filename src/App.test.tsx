import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Renders main element', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const mainElement = await screen.findByRole('main');
  expect(mainElement).toBeInTheDocument();
});
