const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(tool) {
    const [id] = await db('use_my_tools').insert(tool);
    return findById(id);
}


async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('use_my_tools');
}

function findById(id) {
    // .insert(tool);
    return db('use_my_tools').where({
        id
    }).first()
}