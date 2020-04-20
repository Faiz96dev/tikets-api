const UserEntity = require('../entities/UserEntity');

const getAllUsers = () => UserEntity.find();

const FindUser = (email) => UserEntity.find(email);

const AddUser = (email, hash) => {
    var user = new UserEntity({passwordHash: hash, email});
    user.save((err, user) => {
        if (err) return console.error(err);
        console.log(user.email + " user saved to  collection.");
    });
};

module.exports = {
    getAllUsers,
    FindUser,
    AddUser,
};
