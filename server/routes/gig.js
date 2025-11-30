const express = require('express');
const router = express.Router();
const { createGig, getGigs, getGigById } = require('../controllers/gigController');
const auth = require('../middleware/auth');

router.post('/', auth, createGig);
router.get('/', getGigs);
router.get('/:id', getGigById);

module.exports = router;
