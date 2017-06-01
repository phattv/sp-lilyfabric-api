'use strict';

//<editor-fold desc="node_modules">
var express = require('express'),
  router = express.Router();
//</editor-fold>

//<editor-fold desc="App modules">
var Dress = require('../models/dress');
//</editor-fold>

router
  .route('/')
  .get(function (request, response) {
    Dress
      .getAll()
      .then(function (dresses) {
        response.json(dresses);
      })
  });

module.exports = router;