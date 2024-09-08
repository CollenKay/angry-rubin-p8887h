
// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: String,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alumni' }],
});

module.exports = mongoose.model('Event', EventSchema);

