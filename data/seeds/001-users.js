const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  await cleaner.clean(knex);
  return knex("users").insert([
    {
      username: "David",
      password: "test"
    },
    {
      username: "Greg",
      password: "test"
    },
    {
      username: "Carlos",
      password: "test"
    },
    {
      username: "Chaz",
      password: "test"
    }
  ]);
};
