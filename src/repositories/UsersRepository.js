const UserEntity = require('../entities/UserEntity');

const getAllUsers = () => UserEntity.find();

const FindUser = (email) => UserEntity.findOne({ email }, (err, finded) => (finded, err));

const AddUser = (email, hash) => {
  const user = new UserEntity({
    passwordHash: hash,
    email,
  });
  user.save((err) => {
    if (err) return console.error(err);
    console.log(' user saved to  collection.');
  });
};

module.exports = {
  getAllUsers,
  FindUser,
  AddUser,
};
