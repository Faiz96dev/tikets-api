const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repositories/UserRepository');
const { errors } = require('../constants/messages');

const salt = 10;
const { USER_NOT_FOUND, EXIST, WRONG_PASS } = errors.user;

const getAllUsers = () => AuthRepository.getAllUsers();

const userCheck = (email) => AuthRepository.findUser({ email });

const signIn = async (data) => {
  const { password, email } = data;
  const foundUser = await userCheck(email);

  if (!foundUser) {
    return { error: USER_NOT_FOUND };
  }
  const access = bcrypt.compareSync(password, foundUser.passwordHash);
  if (access) {
    const token = jwt.sign(data, foundUser.passwordHash);
    return { user: foundUser, jwtToken: token };
  }
  return { error: WRONG_PASS };
};

const signUp = async (data) => {
  const { password, username, email } = data;
  const foundUser = await userCheck(email);

  if (foundUser) {
    return { error: EXIST };
  }
  const passwordHash = bcrypt.hashSync(password, salt);
  const user = {
    username, email, passwordHash, createdAt: new Date(),
  };
  return AuthRepository.createUser(user);
};

module.exports = {
  signUp,
  getAllUsers,
  userCheck,
  signIn,
};
