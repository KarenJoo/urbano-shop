import '@testing-library/jest-dom'
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './index'
import { store } from '../../store/store';

// Mocks the Link component
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  }))
  
describe('Navbar component', () => {
  test('renders navbar correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>
    );

    // Check if the logo is rendered
    expect(getByText('Urbano')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();

    // Check if cart icon is rendered
    expect(getByAltText('Cart')).toBeInTheDocument();
  });

  test('toggles menu correctly', () => {
    const { getByTestId, queryByText } = render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>
    );

    // Check if menu is closed initially
    expect(queryByText('Home')).not.toBeInTheDocument();

    // Open the menu
    fireEvent.click(getByTestId('burger-menu'));

    // Check if menu is open
    expect(queryByText('Home')).toBeInTheDocument();

    // Close the menu
    fireEvent.click(getByTestId('burger-menu'));

    // Check if menu is closed again
    expect(queryByText('Home')).not.toBeInTheDocument();
  });

  // Add more tests as needed...
});
