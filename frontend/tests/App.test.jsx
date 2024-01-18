import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

it('tests if ProductTable page renders', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(screen.getByRole('heading', { name: /sistema de produtos/i })).toBeInTheDocument();
});
