const UserEntity = require('../entities/UserEntity');

const getAllUsers = () => UserEntity.find();

const FindUser = async (email) => UserEntity.findOne({ email }, (user) => user);

const AddUser = async (email, hash) => {
  const user = new UserEntity({
    passwordHash: hash,
    email,
  });
  await user.save((err) => {
    if (err) return console.error(err);
    return 'user saved to  collection.';
  });
};

module.exports = {
  getAllUsers,
  FindUser,
  AddUser,
};
