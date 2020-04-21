const { Router } = require('express');
const logger = require('../services/LoggerService');
const AuthService = require('../services/AuthService');
const { errors } = require('../constants/messages');

const AuthRouter = Router();

AuthRouter.post('/reg', async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;

    if (!password || !email) {
      return res.status(500)
        .json('token or password is not provided !');
    }
    const auth = await AuthService.CreateUser(email, password);
    return res.status(200)
      .json(auth);
  } catch (err) {
    logger.error(err.message);
    return res.status(500)
      .json(errors.common[500]);
  }
});

AuthRouter.get('/', async (req, res) => {
  try {
    const auth = await AuthService.ReturnAuthUsers();
    return res.status(200)
      .json(auth);
  } catch (err) {
    logger.error(err.message);
    return res.status(500)
      .json(errors.common[500]);
  }
});

module.exports = AuthRouter;
