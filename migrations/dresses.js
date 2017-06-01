'use strict';

var tableName = 'dresses';

exports
  .up = function (knex) {
  return knex
    .schema
    .createTable(tableName, function (table) {
      table
        .increments('id')
        .primary();
      table
        .string('code');
      table
        .string('name');
      table
        .string('description');
      table
        .string('features');
      table
        .float('price');
      table
        .string('category');
      table
        .timestamps() // Adds a created_at and updated_at column on the database
    })
};

exports
  .down = function (knex) {
  return knex
    .schema
    .dropTable(tableName);
};