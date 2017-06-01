'use strict';

//<editor-fold desc="node_modules">
var knex = require('knex')(require('./knexfile')),
  bookshelf = require('bookshelf')(knex);
//</editor-fold>

module.exports = bookshelf;