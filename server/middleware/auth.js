const jwt = require('jsonwebtoken');

// This function acts as middleware to protect routes.
// It will run before the controller function for any route it's applied to.
module.exports = function (req, res, next) {
  // 1. Get token from the 'Authorization' header
  const authHeader = req.header('Authorization');

  // 2. Check if the header or token exists
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // 3. Split "Bearer <token>" and get just the token part
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ msg: 'Malformed token, authorization denied' });
    }
  
    // 4. Verify the token and attach the user payload to the request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; 
    next(); // Proceed to the controller function
  } catch (err) {
    // If jwt.verify() fails, this block will run.
    res.status(401).json({ msg: 'Token is not valid' });
  }
};