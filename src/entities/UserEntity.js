const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: false,
    required: true,
  },
  passwordHash: {
    type: String,
    unique: true,
    required: false,
  },
  createdAt: String,
}, { autoIndex: false });


module.exports = mongoose.model('user', UserSchema);
