const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const alumniRoutes = require('./routes/alumni');
const eventRoutes = require('./routes/events');
const donationRoutes = require('./routes/donations');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/alumni', alumniRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/donations', donationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;