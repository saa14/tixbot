import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from 'uuid';

const ChatWindow = () => {
  const { messages, isLoading, error } = useSelector((state) => state.chat);
  const messagesEndRef = useRef(null);
  const [userId, setUserId] = useState(() => {
    // Check if a user ID already exists in local storage
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? savedUserId : uuidv4(); // Generate a new ID if none exists
  });

  useEffect(() => {
    // Store the user ID in local storage
    localStorage.setItem('userId', userId);
  }, [userId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-[600px] w-full max-w-md flex-col rounded-lg border shadow-lg">
      <div className="bg-blue-500 rounded-t-lg p-4">
        <h2 className="text-lg font-semibold text-white text-center">Tixbot</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} isUser={message.isUser} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 rounded-lg px-4 py-2">
              <p className="text-sm">Typing...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center my-2">{error}</div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput userId={userId} />
    </div>
  );
};

export default ChatWindow; 