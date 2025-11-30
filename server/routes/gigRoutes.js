const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Make sure auth is imported

const {
  createGig,
  getOpenGigs,
  getGigById,
  getGigsByLocation,
  getGigsByClient,
  getGigsByFreelancer
} = require('../controllers/gigController');

// --- MORE SPECIFIC ROUTES GO FIRST ---

// GET /api/gigs/near -> Find gigs by location
router.get('/near', getGigsByLocation);

// GET /api/gigs/mygigs -> Get gigs for the logged-in client (Protected)
router.get('/mygigs', auth, getGigsByClient);

// GET /api/gigs/assigned -> Get gigs for the logged-in freelancer (Protected)
router.get('/assigned', auth, getGigsByFreelancer);


// --- MORE GENERAL ROUTES GO AFTER ---

// GET /api/gigs -> Get all open gigs
router.get('/', getOpenGigs);

// GET /api/gigs/:id -> Get a single gig by its ID
// This is now at the end, so it won't mistakenly catch '/near' or '/mygigs'
router.get('/:id', getGigById);


// --- POST / PUT / DELETE ROUTES ---
router.post('/', auth, createGig);

module.exports = router;

