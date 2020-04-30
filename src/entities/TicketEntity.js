const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  carrier: {
    type: String,
    required: true,
  },
  segments: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('tickets', TicketSchema);
