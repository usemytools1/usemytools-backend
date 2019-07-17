exports.up = function (knex) {
    return knex.schema.createTable("tools", tbl => {
        tbl.increments("id");

        tbl
            .string("tool", 128)
            .unique()
            .notNullable();

        //   tbl.string("password").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("tools");
};