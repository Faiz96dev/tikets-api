const { Router } = require('express');
const logger = require('../services/LoggerService');
const UserService = require('../services/UserService');
const { errors } = require('../constants/messages');

const UserRouter = Router();

UserRouter.post('/signup', async (req, res) => {
  try {
    const data = req.body;
    const user = await UserService.createUser(data);
    console.log('USER', user)
    return res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

UserRouter.get('/users', async (req, res) => {
  try {
    const user = await UserService.getAllUsers();
    return res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});


module.exports = UserRouter;
