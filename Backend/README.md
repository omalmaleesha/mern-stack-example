# Backend API

A Node.js Express backend API for a notes application with MongoDB integration and rate limiting.

## Features

- RESTful API for notes management
- MongoDB database integration with Mongoose
- Rate limiting with Upstash Redis
- Environment configuration with dotenv
- Development server with nodemon

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Rate Limiting**: Upstash Redis
- **Development**: Nodemon for auto-restart

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- Upstash Redis account (for rate limiting)

## Installation

1. Clone the repository and navigate to the backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a specific note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Project Structure

```
Backend/
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware (rate limiter)
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── package.json
├── package-lock.json
└── README.md
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 5001) | No |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL for rate limiting | Yes |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token | Yes |

## Development

1. Start the development server:
```bash
npm run dev
```

2. The server will start on `http://localhost:5001` (or your specified PORT)

3. API endpoints will be available at `http://localhost:5001/api/notes`

## Rate Limiting

This API includes rate limiting middleware powered by Upstash Redis to prevent abuse and ensure fair usage.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

ISC
