const bcrypt = require('bcrypt');
const AuthRepository = require('../repositories/UserRepository');

const saltRounds = 10;

const userCheck = (username, email) => AuthRepository.findUser({ username, email });

const createUser = async (data) => {
  const { password, username, email } = data;

  const checked = await userCheck(username, email);

  if (checked) return { message: 'User already exist' };

  bcrypt.hash(password, saltRounds, (err, passwordHash) => {
    const userData = {
      username, email, passwordHash, createdAt: new Date(),
    };
    return AuthRepository.createUser(userData);
  });
};

const getAllUsers = () => AuthRepository.getAllUsers();

module.exports = {
  createUser,
  getAllUsers,
};
