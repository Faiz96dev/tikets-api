const TicketRepository = require('../repositories/TicketsRepository');

const getTickets = () => TicketRepository.getAllTickets();

const createTicket = (data) => TicketRepository.createTicket(data);

const deleteTicket = (id) => TicketRepository.deleteTicket(id);

const findTicket = (id) => TicketRepository.findTicketById(id);

const updateTicket = (id, data) => TicketRepository.updateTicketById(id, data);


module.exports = {
  getTickets,
  createTicket,
  deleteTicket,
  findTicket,
  updateTicket,
};
