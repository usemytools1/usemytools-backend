exports.up = function (knex) {
    return knex.schema.createTable("tools", tbl => {
        tbl.increments("id");
        tbl.string("tool_name", 128).unique().notNullable();
        tbl.integer("user_id").references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
        tbl.integer('borrower_id').notNullable() // if this is blank then the tool is available to be borrowed

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("tools");
};