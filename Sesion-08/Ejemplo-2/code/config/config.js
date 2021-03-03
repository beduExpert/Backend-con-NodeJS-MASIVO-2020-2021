require('dotenv').config();

const defaultConfig = {
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  host: process.env.MARIADB_HOST,
  port: process.env.MARIADB_PORT,
  dialect: 'mariadb',
};

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {
    /** You can override the default config here */
  }),
};
