// controllers/alumniController.js
const Alumni = require('../models/Alumni');

exports.getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAlumni = async (req, res) => {
  const alumni = new Alumni(req.body);
  try {
    const newAlumni = await alumni.save();
    res.status(201).json(newAlumni);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAlumniById = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    if (alumni == null) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(alumni);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAlumni = async (req, res) => {
  try {
    await Alumni.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alumni deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controllers/eventController.js
const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add more event controller methods as needed

// controllers/donationController.js
const Donation = require('../models/Donation');

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('alumni');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDonation = async (req, res) => {
  const donation = new Donation(req.body);
  try {
    const newDonation = await donation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add more donation controller methods as needed