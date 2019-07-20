exports.up = function(knex) {
  return knex.schema.createTable("tools", tbl => {
    tbl.increments("id");
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl
      .integer("username")
      .references("username")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    tbl.integer("borrower_id").notNullable(); // if this is blank then the tool is available to be borrowed
    // tbl.string("img", 128).notNullable(); // not running yet
    tbl.string("desc", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tools");
};
