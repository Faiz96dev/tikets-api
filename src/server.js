const express = require('express');
const bodyparser = require('body-parser');
const TicketsController = require('./controllers/TicketsController');
const UserController = require('./controllers/UserContoller');
const logger = require('./services/LoggerService');
const mongoose = require('./DB/MongooseModule');

const controllers = [TicketsController, UserController];

const bootstrap = async () => {
  const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  await mongoose.connect();

  app.use('/', ...controllers);

  app.listen(process.env.PORT, () => {
    logger.info(`Server start at: ${process.env.PORT}`);
  });
};


bootstrap();
