'use strict';

//<editor-fold desc="node_modules">
var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');
//</editor-fold>

//<editor-fold desc="Configurations">
var PORT = process.env.PORT || 2828,
  app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('common')); // https://github.com/expressjs/morgan#common
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