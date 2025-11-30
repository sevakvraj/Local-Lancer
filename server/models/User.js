const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // FIX: Changed 'name' to 'username' to match the data being sent
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['freelancer', 'client'], required: true },
});

module.exports = mongoose.model('User', UserSchema);