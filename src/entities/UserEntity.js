const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: String,
}, { timestamp: true });


module.exports = mongoose.model('user', UserSchema);
