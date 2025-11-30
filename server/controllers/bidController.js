const Bid = require('../models/Bid');
const Gig = require('../models/Gig');

// @desc    Create a new bid on a gig
// @route   POST /api/bids/:gigId
// @access  Private (Freelancers only)
exports.createBid = async (req, res) => {
  const { proposal, amount } = req.body;
  const { gigId } = req.params;
  const freelancerId = req.user.id; // From auth middleware

  try {
    const existingBid = await Bid.findOne({ gig: gigId, freelancer: freelancerId });
    if (existingBid) {
      return res.status(400).json({ message: 'You have already placed a bid on this gig.' });
    }

    const newBid = new Bid({
      gig: gigId,
      freelancer: freelancerId,
      proposal,
      amount,
    });

    await newBid.save();
    res.status(201).json(newBid);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all bids for a specific gig
// @route   GET /api/bids/:gigId
// @access  Private (Client who owns the gig only)
exports.getBidsForGig = async (req, res) => {
  const { gigId } = req.params;
  
  try {
    const gig = await Gig.findById(gigId);
    if (!gig) {
      return res.status(404).json({ message: 'Gig not found' });
    }
    if (gig.client.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const bids = await Bid.find({ gig: gigId }).populate('freelancer', 'username');
    res.json(bids);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

