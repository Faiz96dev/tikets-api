const TicketEntity = require('../entities/TicketEntity');

const getAllTickets = () => TicketEntity.find();

const deleteTickets = (id) => {
  return TicketEntity.deleteOne({ _id: id }, (err) => {
    if (err) return err;
  });
};

const saveTickets = (data) => {
  const ticket = new TicketEntity({ ...data });

  // save model to database
  ticket.save((err) => {
    if (err) return err;
  });
  return 'Ticket saved to database !';
};

module.exports = {
  getAllTickets,
  saveTickets,
  deleteTickets,
};
