const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('user', UserSchema);
