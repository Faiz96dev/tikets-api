const TicketEntity = require('../entities/TicketEntity');

const getAllTickets = () => TicketEntity.find();

const deleteTickets = (id) => {
  return TicketEntity.deleteOne({ _id: id }, (err) => {
    if (err) return err;
  });
};

const saveTickets = (data) => {
  const ticket = new TicketEntity({
    ...data,
    addDate: Date.now()
      .toString(),
  });
  ticket.save((err) => {
    if (err) return err;
  });
  return 'Ticket saved to database !';
};

const saveMultiplyTickets = (data) => TicketEntity.collection.insertMany(data, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Multiple documents inserted to Collection');
});

const deleteMultiplyTickets = (data) => {
  TicketEntity.deleteMany(
    {
      _id: {
        $in: data,
      },
    },
    (err, result) => {
      if (err) {
        return err;
      }
      return result;
    },
  );
};

module.exports = {
  getAllTickets,
  saveTickets,
  deleteTickets,
  saveMultiplyTickets,
  deleteMultiplyTickets,
};
