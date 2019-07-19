const environment = process.env.NODE_ENV || "development";
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const environmentConfig = knexConfig[environment];

module.exports = knex(environmentConfig);
