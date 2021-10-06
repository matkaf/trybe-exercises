import { render } from '@testing-library/react';
import App from './App';

test('Verifica se há um input de email', () => {
  // Selecionando da tela:
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  // Testes:
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
});
