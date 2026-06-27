const jwt = require('jsonwebtoken');

// Express middleware that verifies the Bearer JWT and attaches req.user.
module.exports = function protect(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized — no token provided.' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'thalitrack-dev-secret';
    req.user = jwt.verify(token, secret);
    next();
  } catch {
    res.status(401).json({ success: false, error: 'Not authorized — token invalid or expired.' });
  }
};
