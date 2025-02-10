import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import rootReducer from '../../features/chat/chatSlice'; // Adjust the path as necessary
import { ThemeProvider } from '../../ThemeContext'; // Import ThemeProvider

const renderWithReduxAndTheme = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}><ThemeProvider>{component}</ThemeProvider></Provider>),
    store,
  };
};

describe('ThemeToggle Component', () => {
  it('should render the toggle button', () => {
    renderWithReduxAndTheme(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument(); // Use screen to query
  });

  it('should toggle the theme on click', () => {
    const { getByRole } = renderWithReduxAndTheme(<ThemeToggle />);
    const button = getByRole('button');

    // Initial theme should be light
    expect(button).toHaveTextContent('🌙'); // Assuming the initial theme is light

    // Click to toggle theme
    fireEvent.click(button);

    // Check icon after toggle
    expect(button).toHaveTextContent('☀️'); // Assuming the theme is now dark
  });
});