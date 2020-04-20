const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  tickets: {
    price: Number,
    carrier: String,
    segments: [
      {
        origin: String,
        destination: String,
        date: String,
        stops: [String],
        duration: Number,
      },
      {
        origin: String,
        destination: String,
        date: String,
        stops: [String],
        duration: Number,
      },
    ],
  },
});

module.exports = mongoose.model('tickets', TicketSchema);
