const {Router} = require('express');
const logger = require('../services/LoggerService');
const AuthService = require('../services/AuthService');
const {errors} = require('../constants/messages');

const AuthRouter = Router();

AuthRouter.get('/reg', async (req, res) => {
    try {
        const {email} = req.body
        const {password} = req.body
        const auth = await AuthService.CreateUser(email, password);
        return res.status(200).json(auth);
    } catch (err) {
        logger.error(err.message);
        return res.status(500).json(errors.common[500]);
    }
});

module.exports = AuthRouter;
