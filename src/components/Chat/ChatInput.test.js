import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatInput from './ChatInput';
import rootReducer from '../../features/chat/chatSlice'; // Adjust the path as necessary

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('ChatInput Component', () => {
  it('should render without crashing', () => {
    const { container } = renderWithRedux(<ChatInput userId="testUser" />);
    expect(container).toBeInTheDocument();
  });

  it('should clear input after sending a message', () => {
    const { getByPlaceholderText, getByRole } = renderWithRedux(<ChatInput userId="testUser" />);
    const input = getByPlaceholderText(/Type your message.../i);
    const button = getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(input.value).toBe(''); // Input should be cleared after sending
  });
});