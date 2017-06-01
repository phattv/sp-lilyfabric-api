'use strict';

//<editor-fold desc="node_modules">
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();
//</editor-fold>

//<editor-fold desc="Configurations">
var PORT = process.env.PORT || 2828;
app.use(bodyParser.urlencoded({
  extend: true
}));
//</editor-fold>

//<editor-fold desc="Routes">
var dressesRoute = require('./routes/dresses');
app.use('/dresses', dressesRoute);
//</editor-fold>

app.listen(PORT, function () {
  console.log('=== lilyfabric-api server is listening on port %s ===.', PORT);
});