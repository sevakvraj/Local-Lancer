const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  budget: { type: Number, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'completed', 'closed'],
    default: 'open',
  },
  selectedFreelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deadline: { type: Date },
  city: { type: String, required: true }, // <-- Added city field
  location: {
    type: {
      type: String,
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number], // Array of numbers for [longitude, latitude]
      required: true,
    },
  },
});

// --- ADD THIS INDEX FOR GEOSPATIAL QUERIES ---
// This makes location-based searches much faster.
gigSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Gig', gigSchema);