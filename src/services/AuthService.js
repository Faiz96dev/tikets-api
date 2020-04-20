const UsersRepository = require('../repositories/UsersRepository');

const getTickets = () => UsersRepository.getAllUsers();

const CreateUser = (email, password) => {
  const exist = UsersRepository.FindUser(email)
}

module.exports = {
  getTickets,
  CreateUser
};
