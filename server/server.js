const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/gigs', require('./routes/gigRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bids', require('./routes/bidRoutes')); // <-- ADD THIS LINE


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));