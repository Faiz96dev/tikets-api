const UserEntity = require('../entities/UserEntity');

const getAllUsers = () => UserEntity.find();

const FindUser = (email) => UserEntity.find(email);

const AddUser = (email) => UserEntity.find(email);

module.exports = {
    getAllUsers,
    FindUser,
    AddUser,
};