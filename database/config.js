"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);
require('dotenv/config');


const config = {
  client: 'sqlite3',
    connection: {
      filename: process.env.DB_URL || ":memory:",
    },
    useNullAsDefault: true,
    migrations: {
      directory: `./src/database/migrations`,
      tableName: 'knex_migrations',
      extension: 'js',
      loadExtensions: ['.js']
    },
    seeds: {
      directory: `./seeds`,
      loadExtensions: ['.js']
    },
}

exports. default = config;
 const connection = _knex2.default.call(void 0, config); exports.connection = connection

exports.connection.migrate.latest()
