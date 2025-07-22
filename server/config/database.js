require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "snj627IRM162!",
    database: "BolsonVegetal",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOSTNAME,
    dialect: "mysql",
  },
};
