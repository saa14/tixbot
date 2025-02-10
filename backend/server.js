const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const mockData = require('./mockData/tickets');

const app = express();

// Configure CORS with specific options
app.use(cors({
  origin: 'http://localhost:3000', // Allow your React dev server
  methods: ['POST', 'GET', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type'] // Allowed headers
}));

app.use(express.json());

const sessionClient = new dialogflow.SessionsClient({
  credentials: JSON.parse(Buffer.from(process.env.DIALOGFLOW_CREDENTIALS, 'base64').toString('utf-8'))
});

const projectId = process.env.DIALOGFLOW_PROJECT_ID;

console.log('Project ID:', projectId);

// In-memory store for session IDs
const userSessions = {}; // This will hold user session IDs

app.post('/api/chat', async (req, res) => {
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
});

// Webhook endpoint for DialogFlow
app.post('/api/webhook', async (req, res) => {
  console.log('Webhook Request:', req.body);
  
  // Check if queryResult exists in the request body
  if (!req.body.queryResult || !req.body.queryResult.parameters) {
    return res.status(400).json({ error: 'Invalid input: bookingCategory is required.' });
  }

  const bookingCategory = req.body.queryResult.parameters.bookingCategory?.toLowerCase();
  const selectedOption = req.body.queryResult.parameters.selectedOption?.toLowerCase();
  
  let response = {
    fulfillmentText: "I couldn't process that request.",
    fulfillmentMessages: []
  };

  // Validate booking category
  if (!bookingCategory) {
    return res.status(400).json({ error: 'Invalid input: bookingCategory is required.' });
  }

  switch (bookingCategory) {
    case 'movies':
      const availableMovies = mockData.movies.map(movie => movie.name).join(', ');
      response.fulfillmentText = `We are currently showing these movies:\n${availableMovies}\n\nDo you want to book tickets for any movie listed?`;
      break;

    case 'events':
      const availableEvents = mockData.events.map(event => 
        `${event.name} at ${event.venue}`
      ).join(', ');
      response.fulfillmentText = `Current events available:\n${availableEvents}\n\nDoes any event from the list interest you?`;
      break;

    case 'travel':
      const availableDestinations = mockData.travel.map(trip => 
        `${trip.name} (${trip.duration})`
      ).join(', ');
      response.fulfillmentText = `Available travel packages:\n${availableDestinations}\n\nDo you want to explore a destination from the given list?`;
      break;

    default:
      response.fulfillmentText = "I can help you book tickets for movies, events, or travel packages. What are you interested in?";
  }

  if (selectedOption && bookingCategory === 'movies') {
    const movieDetails = mockData.movies.find(movie => movie.name.toLowerCase() === selectedOption);
    if (movieDetails) {
      response.fulfillmentText = `Here are the details for ${movieDetails.name}:\n` +
        `- Dates: ${movieDetails.dates.join(', ')}\n` +
        `- Showtimes: ${movieDetails.showtimes.join(', ')}\n` +
        `- Available Seats: ${movieDetails.availableSeats}\n\n` +
        `How many tickets would you like to book?`;
    } else {
      response.fulfillmentText = `Sorry, the selected movie "${selectedOption}" is not available.`;
    }
  }

  if (selectedOption && bookingCategory === 'events') {
    const eventDetails = mockData.events.find(event => event.name.toLowerCase() === selectedOption);
    if (eventDetails) {
      response.fulfillmentText = `Here are the details for ${eventDetails.name}:\n` +
        `- Venue: ${eventDetails.venue}\n` +
        `- Dates: ${eventDetails.dates.join(', ')}\n` +
        `- Time: ${eventDetails.time}\n` +
        `- Available Seats: ${eventDetails.availableSeats}\n\n` +
        `How many tickets would you like to book?`;
    } else {
      response.fulfillmentText = `Sorry, the selected event "${selectedOption}" is not available.`;
    }
  }

  if (selectedOption && bookingCategory === 'travel') {
    const travelDetails = mockData.travel.find(trip => trip.name.toLowerCase() === selectedOption);
    if (travelDetails) {
      response.fulfillmentText = `Here are the details for ${travelDetails.name}:\n` +
        `- Duration: ${travelDetails.duration}\n` +
        `- Dates: ${travelDetails.dates.join(', ')}\n` +
        `- Time: ${travelDetails.time}\n` +
        `- Available Seats: ${travelDetails.availableSeats}\n\n` +
        `How many tickets would you like to book?`;
    } else {
      response.fulfillmentText = `Sorry, the selected travel package "${selectedOption}" is not available.`;
    }
  }

  console.log('Webhook Response:', response);
  res.json(response);
});

// Handle unsupported methods
app.all('/api/chat', (req, res) => {
  res.status(405).send('Method Not Allowed');
});

// Export the app
module.exports = app;

// Start the server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} 