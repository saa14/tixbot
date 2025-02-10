const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
  it('should respond with 405 for unsupported methods on /api/chat', async () => {
    const response = await request(app).get('/api/chat');
    expect(response.status).toBe(405);
  });

  it('should return 400 for missing userId and message', async () => {
    const response = await request(app).post('/api/chat').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid input: userId and message are required.');
  });

  it('should return a response for valid chat request', async () => {
    const response = await request(app).post('/api/chat').send({
      userId: 'testUser',
      message: 'Hello'
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('reply');
  });

  it('should return 400 for missing bookingCategory in webhook', async () => {
    const response = await request(app).post('/api/webhook').send({
      queryResult: {
        parameters: {} // Simulate missing bookingCategory
      }
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid input: bookingCategory is required.');
  });
});