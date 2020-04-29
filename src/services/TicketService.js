const TicketRepository = require('../repositories/TicketsRepository');

const getTickets = () => TicketRepository.getAllTickets();

const deleteTickets = (data) => {
  if (!data) {
    return 'data is not provided!';
  }
  if (data.length > 1) {
    return TicketRepository.deleteMultiplyTickets(data);
  }
  return TicketRepository.deleteTickets(data);
};

const saveTickets = (data) => {
  if (data.length > 1) {
    return TicketRepository.saveMultiplyTickets(data);
  }
  return TicketRepository.saveTickets(data);
};

module.exports = {
  deleteTickets,
  getTickets,
  saveTickets,
};
