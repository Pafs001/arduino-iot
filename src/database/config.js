import knex from 'knex';
import 'dotenv/config';


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

export default config;
export const connection = knex(config)

connection.migrate.latest()
