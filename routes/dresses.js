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
      .fetchAll()
      .then(function (dresses) {
        response.json(dresses);
      })
  })
  .post(function (request, response) {
    new Dress({
      code: request.body.code,
      name: request.body.name,
      description: request.body.description
    })
      .save()
      .then(function (savedDress) {
        console.log(savedDress);
        response.json(savedDress);
      });
  });

router
  .route('/:id')
  .put(function (request, response) {
    Dress
      .where('id', request.params.id)
      .fetch()
      .then(function (dress) {
        dress
          .save({
            code: request.body.code,
            name: request.body.name,
            description: request.body.description
          })
          .then(function (savedDress) {
            response.json(savedDress);
          })
      })
  })
  .delete(function (request, response) {
    Dress
      .where('id', request.params.id)
      .destroy()
      .then(function (destroyedDress) {
        response.json(destroyedDress);
      })
  });

module.exports = router;