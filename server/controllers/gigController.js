// 1. Require the Mongoose Gig model
const Gig = require('../models/Gig');

// Controller function to create a new gig
const createGig = async (req, res) => {
  // Get all the data from the frontend form
  const { title, description, budget, category, location, city } = req.body;
  try {
    const newGig = new Gig({
      title,
      description,
      budget,
      category,
      location,
      city,
      client: req.user.id, // req.user.id is added by the auth middleware
    });
    
    await newGig.save();
    res.status(201).json(newGig); // Send back the new gig
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to get all open gigs (with search)
const getOpenGigs = async (req, res) => {
  try {
    const query = { status: 'open' };

    // Add filters based on what the user searched for
    if (req.query.q) {
      query.$text = { $search: req.query.q };
    }
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.city) {
      query.city = { $regex: new RegExp(req.query.city, 'i') };
    }

    const gigs = await Gig.find(query).populate('client', 'username');
    res.json(gigs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to get a single gig by its ID
const getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id).populate('client', 'username');
    if (!gig) {
      return res.status(404).json({ message: 'Gig not found' });
    }
    res.json(gig);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to get gigs near a map location
const getGigsByLocation = async (req, res) => {
    try {
        const { lng, lat } = req.query;
        const gigs = await Gig.find({
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: 10000 // 10km radius
                }
            },
            status: 'open'
        }).populate('client', 'username');
        res.json({ gigs });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Controller function for the client's dashboard
const getGigsByClient = async (req, res) => {
  try {
    const gigs = await Gig.find({ client: req.user.id }).populate('selectedFreelancer', 'username');
    res.json(gigs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function for the freelancer's dashboard
const getGigsByFreelancer = async (req, res) => {
  try {
    const gigs = await Gig.find({ selectedFreelancer: req.user.id }).populate('client', 'username');
    res.json(gigs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// 2. Export all the functions in a single block
module.exports = {
  createGig,
  getOpenGigs,
  getGigById,
  getGigsByLocation,
  getGigsByClient,
  getGigsByFreelancer,
};

