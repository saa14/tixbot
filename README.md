# TixBot

TixBot is a ticket booking application that integrates with Dialogflow for natural language processing. This README provides instructions on how to run the application locally.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)

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
   # Navigate to the root directory
   npm install

   # Navigate to the backend directory
   cd ../backend
   npm install
   ```

## Running the Frontend

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the backend server:
   ```bash
   npm start
   ```

3. The backend will run on `http://localhost:3001` by default.