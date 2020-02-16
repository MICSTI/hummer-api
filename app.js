const express = require('express');

const config = require('./config');
const logger = require('./util/logger');

const app = express();

const { port } = config.app;
app.listen(port, () => logger.log('info', `hummer-api running on port ${port}`));

module.exports = app;
