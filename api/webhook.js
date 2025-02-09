const dialogflow = require('@google-cloud/dialogflow');
const mockData = require('../backend/mockData/tickets');
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log('Webhook Request:', req.body);
  
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
} 