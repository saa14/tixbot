import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatBubble from './ChatBubble';

describe('ChatBubble Component', () => {
  it('should render user message correctly', () => {
    render(<ChatBubble message={{ text: 'Hello', isUser: true }} />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });

  it('should render bot message correctly', () => {
    render(<ChatBubble message={{ text: 'Hi there!', isUser: false }} />);
    expect(screen.getByText(/Hi there!/i)).toBeInTheDocument();
  });
});