exports.up = function (knex) {
    return knex.schema.createTable("tools_users", tbl => {
        tbl.increments('id')
        tbl.integer('tool_id').references('tool_id').inTable('User_tools').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
        tbl.integer('user_id').references('id').inTable('User_tools').onDelete('CASCADE').onUpdate('CASCADE').notNullable()

        tbl.integer('tool_name').references('tool_name').inTable('User_tools').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
        tbl.integer('username').references('username').inTable('User_tools').onDelete('CASCADE').onUpdate('CASCADE').notNullable()

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("tools_users");
};