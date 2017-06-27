'use strict';

//<editor-fold desc="node_modules">
const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  fileStream = require('fs'),
  path = require('path'),
  fileStreamRorator = require('file-stream-rotator'),
  compression = require('compression');
//</editor-fold>


//<editor-fold desc="Configurations">
const PORT = process.env.PORT || 7603,
  app = express(),
  logDirectory = path.join(__dirname, 'log'),
  logToFileStream = fileStreamRorator
    .getStream({
      filename: path.join(logDirectory, 'lilyfabric-%DATE%.log'),
      frequency: 'weekly',
      verbose: false,
      date_format: 'YYYYMMDD'
    });

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Logging
app.use(morgan('common'));  // Log to console
fileStream.existsSync(logDirectory) || fileStream.mkdirSync(logDirectory);
app.use(morgan('common', {  // Log to file
  stream: logToFileStream
}));

// Gzip responses
app.use(compression());
//</editor-fold>


//<editor-fold desc="Routing">
require('./routes')(app);
app.get('*', (request, response) => response.status(200).send({
  message: 'Welcome to lilyfabric-api.',
}));
//</editor-fold>

app.listen(PORT, function () {
  console.log('+-------------------------------------------------+');
  console.log('| lilyfabric-api server is listening on port %s |', PORT);
  console.log('+-------------------------------------------------+');
});

module.exports = app;