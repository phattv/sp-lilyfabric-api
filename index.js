'use strict';

//<editor-fold desc="node_modules">
var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  fileStream = require('fs'),
  path = require('path'),
  fileStreamRorator = require('file-stream-rotator'),
  compression = require('compression');
//</editor-fold>

//<editor-fold desc="Configurations">
var PORT = process.env.PORT || 2828,
  app = express(),
  logDirectory = path.join(__dirname, 'log'),
  logToFileStream = fileStreamRorator
    .getStream({
      filename: path.join(logDirectory, 'lilyfabric-%DATE%.log'),
      frequency: 'weekly',
      verbose: false,
      date_format: 'YYYYMMDD'
    });

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('common'));  // Log to console
fileStream.existsSync(logDirectory) || fileStream.mkdirSync(logDirectory);
app.use(morgan('common', {  // Log to file
  stream: logToFileStream
}));

app.use(compression());
//</editor-fold>

//<editor-fold desc="Routes">
var dressesRoute = require('./routes/dresses');
app.use('/dresses', dressesRoute);
//</editor-fold>

app.listen(PORT, function () {
  console.log('+-------------------------------------------------+');
  console.log('| lilyfabric-api server is listening on port %s |', PORT);
  console.log('+-------------------------------------------------+');
});