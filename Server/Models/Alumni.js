// models/Alumni.js
const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  graduationYear: { type: Number, required: true },
  major: String,
  currentJob: String,
  phoneNumber: String,
  address: String,
});

module.exports = mongoose.model('Alumni', AlumniSchema);


