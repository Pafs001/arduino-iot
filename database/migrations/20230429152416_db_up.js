"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 async function up(knex) {
  const exists = await knex.schema.hasTable('register');
  if(!exists){
    const result_1 = await knex.schema
    .createTable('register', function (table) {
      table.increments('id').primary().notNullable();
      table.string('title', 255).notNullable();
      table.integer('meter1').notNullable();
      table.integer('meter2').notNullable();
      table.timestamp('date').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    })
    .createTable('consolidated', function (table) {
      table.increments('id').primary().notNullable();
      table.string('title', 255).notNullable();
      table.integer('meter1').notNullable();
      table.integer('meter2').notNullable();
      table.timestamp('date').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    return result_1;
  }
} exports.up = up;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 function down(knex) {
  return knex.schema
    .dropTable("register")
    .dropTable("consolidate");
} exports.down = down;
