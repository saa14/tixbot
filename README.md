# TixBot

TixBot is a ticket booking application that integrates with Dialogflow for natural language processing. This README provides instructions on how to run the application locally.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have [Node.js](https://nodejs.org/) installed (version 14 or higher).
- You have [npm](https://www.npmjs.com/) installed (comes with Node.js).
- You have a code editor like [Visual Studio Code](https://code.visualstudio.com/) installed.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tixbot.git
   cd tixbot
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```

## Running the Frontend

1. Start the development server:
   ```bash
   npm run start:frontend
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Running the Backend

1. Start the backend server:
   ```bash
   npm run start:backend
   ```

2. The backend will run on `http://localhost:3001` by default.

## Running locally:
   ```bash
   npm run start:dev
   ```

## Environment Variables

To run the application, you need to set up environment variables. Create a `.env` file in the root directory and add the following variables:

```
REACT_APP_BACKEND_URL=http://localhost:3001
DIALOGFLOW_PROJECT_ID=tixbot-ymsn
DIALOGFLOW_CREDENTIALS=your-dialogflow-credentials
```

If you have a production environment, create a `.env.production` file in the root directory with the same variables.

### Dialogflow Credentials

You also need to set up your Dialogflow credentials. Place your `dialogflow-credentials.json` file in the `backend/credentials/` directory. Ensure that this file is not tracked by Git by adding it to your `.gitignore`.

## Usage

Once both the frontend and backend are running, you can interact with the application. The frontend will send requests to the backend, which will process them and respond accordingly.

## API Endpoints

The backend server exposes the following endpoints:

- POST `/api/chat`: Send messages to the chatbot
  ```
  POST http://localhost:3001/api/chat
  Content-Type: application/json

  {
    "userId": "string",
    "message": "string"
  }
  ```

- POST `/api/webhook`: Dialogflow webhook endpoint
  ```
  POST http://localhost:3001/api/webhook
  ```

## Scripts

The following scripts are available in the combined `package.json`:

- `start`: Starts the frontend development server.
- `build`: Builds the frontend application for production.
- `test`: Runs tests for the frontend application.
- `eject`: Ejects the Create React App configuration.
- `start:backend`: Starts the backend server.
- `start:frontend`: Starts the frontend development server.
- `start:dev`: Runs both the frontend and backend servers concurrently.


## License

This project is licensed under the MIT License.