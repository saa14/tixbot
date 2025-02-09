import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, setLoading, setError } from '../../features/chat/chatSlice';
import { sendMessageToDialogflow } from '../../services/dialogflowService';

const ChatInput = ({ userId }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(addMessage({
      text: input,
      isUser: true,
      timestamp: new Date().toISOString()
    }));

    setInput('');

    try {
      dispatch(setLoading(true));
      const response = await sendMessageToDialogflow(userId, input);
      
      dispatch(addMessage({
        text: response,
        isUser: false,
        timestamp: new Date().toISOString()
      }));
    } catch (error) {
      dispatch(setError('Failed to get response from chatbot'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput; 