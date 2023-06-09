// Required module
require('dotenv').config();
const logger = require('./utils/logger');
const cors = require('cors');
const express = require('express');
const app = express();

// Use for react access in CORS Policy
app.use(cors());

// Refractored index file in startup folder
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();
require('./startup/prod')(app);


// Creating the server.
const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger.info(`Listening in PORT ${port}`));

module.exports = server;
