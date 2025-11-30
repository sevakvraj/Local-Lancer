const mongoose = require('mongoose');
const Gig = require('../models/Gig');

const MONGO_URI = 'mongodb://localhost:27017/freelancer_marketplace';

async function removeAllGigs() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Gig.deleteMany({});
  console.log('All gigs removed!');
  mongoose.disconnect();
}

removeAllGigs();
