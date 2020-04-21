const bcrypt = require('bcrypt');
const UsersRepository = require('../repositories/UsersRepository');
// const { secret } = require('../constants/jwt.config');


const ReturnAuthUsers = () => UsersRepository.getAllUsers();

const CreateUser = async (email, password) => {
  const salt = 10;
  const finded = await UsersRepository.FindUser(email);
  if (finded) {
    return 'user already exist!';
  }
  const hash = await bcrypt.hash(password, salt);
  console.log(hash);
  return UsersRepository.AddUser(email, hash);
};

module.exports = {
  ReturnAuthUsers,
  CreateUser,
};
