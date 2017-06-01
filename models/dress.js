'use strict';

var bookshelf = require('../bookshelf');

var Dress = bookshelf
  .Model
  .extend({
    tableName: 'dresses'
  });

module.exports = Dress;