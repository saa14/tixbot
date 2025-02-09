const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const sessionClient = new dialogflow.SessionsClient({
  credentials: JSON.parse(Buffer.from(process.env.DIALOGFLOW_CREDENTIALS, 'base64').toString('utf-8'))
});

const projectId = process.env.DIALOGFLOW_PROJECT_ID;

// In-memory store for session IDs (Note: This will reset on each deployment)
const userSessions = {};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log('Received chat request:', req.body);
  
  const { userId, message } = req.body;

  // Validate input
  if (!userId || !message) {
    return res.status(400).json({ error: 'Invalid input: userId and message are required.' });
  }

  let sessionId;

  // Check if the user already has a session ID
  if (userSessions[userId]) {
    sessionId = userSessions[userId]; // Use existing session ID
  } else {
    sessionId = uuidv4(); // Generate a new session ID
    userSessions[userId] = sessionId; // Store the new session ID
  }

  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
  
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    console.log('DialogFlow response:', responses[0].queryResult);
    res.json({ reply: responses[0].queryResult.fulfillmentText });
  } catch (error) {
    console.error('DialogFlow error:', error);
    res.status(500).json({ error: 'Failed to process request. Please try again later.' });
  }
} 