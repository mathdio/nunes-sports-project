import ProductsTable from '../src/pages/ProductsTable';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

it('tests if ProductTable page renders', () => {
  render(
    <BrowserRouter>
      <ProductsTable />
    </BrowserRouter>,
  );
  expect(screen.getByRole('heading', { name: /sistema de produtos/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /registrar novo produto/i })).toBeInTheDocument();
});
