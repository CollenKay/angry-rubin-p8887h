// routes/donations.js
const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.get('/', donationController.getAllDonations);
router.post('/', donationController.createDonation);
// Add more routes as needed

module.exports = router;