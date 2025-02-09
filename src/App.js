import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ChatWindow from './components/Chat/ChatWindow';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <ChatWindow />
      </div>
    </Provider>
  );
}

export default App; 