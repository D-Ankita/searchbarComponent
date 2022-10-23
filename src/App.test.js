import { render, screen } from '@testing-library/react';
import App from './App';

describe("workflow sidebar", () => {
  beforeEach(() => {
    render(<App />);
  })

  test('renders heading Component', () => {
    const linkElement = screen.getByText(/Workflow-js Component/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('renders Search Bar', () => {
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toBeInTheDocument();
  });


  test('renders the cancel button-Icon', () => {
    const linkElement = screen.getByTestId('icon');
    expect(linkElement).toBeInTheDocument();
  });


  test('renders All the List Items', () => {
    const linkElement = screen.getAllByRole('listItem');
    expect(linkElement.length).toBe(10)
  });




});
