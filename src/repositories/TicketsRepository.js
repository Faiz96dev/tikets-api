const TicketEntity = require('../entities/TicketEntity');

const getAllTickets = () => TicketEntity.find();

const createTicket = (data) => TicketEntity.create(data);

const deleteTicket = (id) => TicketEntity.findByIdAndDelete(id);

const findTicketById = (id) => TicketEntity.find(id);

const updateTicketById = (id, data) => TicketEntity.findOneAndUpdate(id, data);

module.exports = {
  getAllTickets,
  createTicket,
  deleteTicket,
  findTicketById,
  updateTicketById,
};
