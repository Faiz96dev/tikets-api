const UserEntity = require('../entities/UserEntity');

const createUser = (data) => UserEntity.create(data);

const getAllUsers = () => UserEntity.find();

const findUser = (data) => UserEntity.findOne(data, (err, res) => res);

module.exports = {
  createUser,
  getAllUsers,
  findUser,
};
