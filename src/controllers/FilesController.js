
const { Router } = require('express');
const multer = require('multer');
const logger = require('../services/LoggerService');
// const TicketService = require('../services/TicketService');
const { errors } = require('../constants/messages');

const upload = multer({ dest: 'uploads/' });

const FilesRouter = Router();

// eslint-disable-next-line consistent-return
FilesRouter.post('/upload', upload.single(''), async (req, res) => {
  try {
    console.log(req.file);
    // const tickets = await TicketService.getTickets();
    return res.status(200)
      .json('files');
  } catch (err) {
    logger.error(err.message);
    return res.status(500)
      .json(errors.common[500]);
  }
});

module.exports = FilesRouter;
