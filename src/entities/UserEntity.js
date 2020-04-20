const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('tickets', TicketSchema);
