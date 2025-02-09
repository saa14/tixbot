import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const sendMessageToDialogflow = async (userId, message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, {
      userId: userId,
      message: message
    });
    
    return response.data.reply;
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
}; 