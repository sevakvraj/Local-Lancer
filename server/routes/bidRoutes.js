const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createBid, getBidsForGig } = require('../controllers/bidController');

// @route   POST /api/bids/:gigId -> Place a new bid on a gig
router.post('/:gigId', auth, createBid);

// @route   GET /api/bids/:gigId -> Get all bids for a specific gig
router.get('/:gigId', auth, getBidsForGig);

module.exports = router;

