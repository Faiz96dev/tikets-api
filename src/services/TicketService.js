const TicketRepository = require('../repositories/TicketsRepository');

const getTickets = () => TicketRepository.getAllTickets();

const deleteTickets = (id) => {
  if (!id) {
    return 'id is not provided!';
  }
  return TicketRepository.deleteTickets(id);
};

const setTickets = (data) => {
  if (!data.price || !data.direction) {
    return 'place fill all fields in ticket to save!';
  }
  const ticket = {
    ...data,
    date: Date.now()
      .toString(),
  };
  return TicketRepository.saveTickets(ticket);
};

module.exports = {
  deleteTickets,
  getTickets,
  setTickets,
};
