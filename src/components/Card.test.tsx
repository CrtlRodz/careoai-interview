import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';

const testUser = {
  name: 'Test User',
  position: 'Test Position',
  image: 'test-image.png',
  message: 5,
  attachments: 2,
};

describe('Card Component', () => {
  test('renders user name and position', () => {
    render(<Card user={testUser} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test Position')).toBeInTheDocument();
  });

  test('renders user image with correct attributes', () => {
    render(<Card user={testUser} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', testUser.image);
    expect(imageElement).toHaveAttribute('alt', testUser.name);
  });

  test('renders message and attachments counts', () => {
    render(<Card user={testUser} />);
    expect(screen.getByText(String(testUser.message))).toBeInTheDocument();
    expect(screen.getByText(String(testUser.attachments))).toBeInTheDocument();
  });

  test('renders the menu icon container', () => {
    render(<Card user={testUser} />);
    const menuIconContainer = screen.getByTestId('menu-icon-container');
    expect(menuIconContainer).toBeInTheDocument();
  });
});
