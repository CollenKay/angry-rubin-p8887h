# Alumni CRM Backend

This is the backend for the Alumni CRM tool, built with Node.js, Express, and MongoDB.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```
4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

- Alumni:
  - GET /api/alumni
  - POST /api/alumni
  - GET /api/alumni/:id
  - PUT /api/alumni/:id
  - DELETE /api/alumni/:id

- Events:
  - GET /api/events
  - POST /api/events

- Donations:
  - GET /api/donations
  - POST /api/donations

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details