const TicketEntity = require('../entities/TicketEntity');

const getAllTickets = () => TicketEntity.find();

const deleteTickets = (id) => TicketEntity.deleteOne({ _id: id }, (err) => {
  if (err) return err;
});

const saveTickets = (data) => {
  const { price, carrier, segments } = data[0];
  console.log(price)
  const ticket = new TicketEntity({
    price,
    carrier,
    segments,
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
