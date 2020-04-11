const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repositories/UserRepository');

const saltRounds = 10;


const userCheck = (email) => AuthRepository.findUser({ email });

const signIn = async (data) => {
  const { password, email } = data;
  const foundUser = await AuthRepository.findUser({ email });

  if (!foundUser) {
    return { error: { message: 'User not found' } };
  }
  const access = bcrypt.compareSync(password, foundUser.passwordHash);
  if (access) {
    const token = jwt.sign(data, foundUser.passwordHash);
    return { user: foundUser, jwtToken: token };
  }
  return { error: { message: 'Wrong password' } };
};


const signUp = async (data) => {
  const { password, username, email } = data;
  const checked = await userCheck(email);

  if (checked) {
    return { message: 'User already exist' };
  }
  const passwordHash = bcrypt.hashSync(password, saltRounds);
  const user = {
    username, email, passwordHash, createdAt: new Date(),
  };
  return AuthRepository.createUser(user);
};
const getAllUsers = () => AuthRepository.getAllUsers();

module.exports = {
  signUp,
  getAllUsers,
  userCheck,
  signIn,
};
