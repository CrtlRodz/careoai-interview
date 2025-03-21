import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders header with correct user count', () => {
    render(<App />);

    // Now use the data-testid to target the correct element
    const countElement = screen.getByTestId('user-count');
    expect(countElement).toHaveTextContent("3");
  });

  test('renders all user cards', () => {
    render(<App />);

    expect(screen.getByText("Skylar Calzoni")).toBeInTheDocument();
    expect(screen.getByText("Alfredo Gouse")).toBeInTheDocument();
    expect(screen.getByText("James Carder")).toBeInTheDocument();
  });
});
