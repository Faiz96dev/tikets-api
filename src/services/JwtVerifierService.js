const jwt = require('jsonwebtoken');
const { errors } = require('../constants/messages');

const JwtVerifier = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: errors.common[401] });
  }
  try {
    await jwt.verify(token, req.body.password);
    next();
  } catch (e) {
    res.status(401).json({ message: errors.common[401] });
  }
};

module.exports = {
  JwtVerifier,
};
