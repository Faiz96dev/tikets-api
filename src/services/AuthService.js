const UsersRepository = require('../repositories/UsersRepository');
const {secret} = require('../constants/jwt.config')
const bcrypt = require('bcrypt');
const getTickets = () => UsersRepository.getAllUsers();

const CreateUser = async (email, password) => {
    const exist = UsersRepository.FindUser(email)
    if (exist) {
        throw new Error('User already exist !')
        return
    }
    const hash = bcrypt.hashSync(password, secret);
    return UsersRepository.AddUser(email, hash)
}

module.exports = {
    getTickets,
    CreateUser,
};
