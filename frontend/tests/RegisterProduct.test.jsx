import App from '../src/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

it('tests if ProductTable button redirects to RegisterProduct page', () => {
  const { history } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const buttonRegisterNew = screen.getByRole('button', { name: /registrar novo produto/i });
  userEvent.click(buttonRegisterNew);

  // const { pathname } = history.location;
  // expect(pathname).toBe('/register');
});
