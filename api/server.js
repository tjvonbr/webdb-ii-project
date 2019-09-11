const express = require('express');
const helmet = require('helmet');

const dealerRouter = require('../cars/dealerRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/car-dealer', dealerRouter);

module.exports = server;