// routes/events.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
// Add more routes as needed

module.exports = router;

