const { Sequelize } = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const USER_DB = process.env.USER_DB;
const USER_DB_PASSWORD = process.env.USER_DB_PASSWORD;
const HOST = process.env.HOST;

const sequelize = new Sequelize(DB_NAME, USER_DB, USER_DB_PASSWORD, {
  host: HOST,
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = sequelize;
