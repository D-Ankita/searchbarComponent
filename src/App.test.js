import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Workflow Component/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Search Bar', () => {
  render(<App />);
  const linkElement = screen.getByRole('textbox');
  expect(linkElement).toBeInTheDocument();
});

test('renders the cancel button-Icon', () => {
  render(<App />);
  const linkElement = screen.getByTestId('icon');
  expect(linkElement).toBeInTheDocument();
});


test('renders All the List Items', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('listItem');
  expect(linkElement.length).toBe(4)
});