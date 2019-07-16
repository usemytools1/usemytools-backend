exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tools')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([{
          tool: 'saw'
        },
        {
          tool: 'hammer'
        },
        {
          tool: 'drill'
        },
        {
          tool: 'handtruck'
        },
        {
          tool: 'wheelbarrow'
        },
        {
          tool: 'spark plug gapper'
        },
        {
          tool: 'valve spacer'
        },
        {
          tool: 'air compressor'
        },
        {
          tool: 'american socket set'
        },
        {
          tool: 'metric socket set'
        }
      ]);
    });
};