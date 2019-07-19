exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tools')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([{
          tool_name: 'saw',
          user_id: 1,
          borrower_id: 2
        },
        {
          tool_name: 'hammer',
          user_id: 2,
          borrower_id: 3

        },
        {
          tool_name: 'drill',
          user_id: 3,
          borrower_id: 4
        },
        {
          tool_name: 'handtruck',
          user_id: 4,
          borrower_id: 1
        },
        {
          tool_name: 'wheelbarrow',
          user_id: 1,
          borrower_id: 4
        },
        {
          tool_name: 'spark plug gapper',
          user_id: 1,
          borrower_id: 3
        },
        {
          tool_name: 'valve spacer',
          user_id: 2,
          borrower_id: 1
        },
        {
          tool_name: 'air compressor',
          user_id: 2,
          borrower_id: 4
        },
        {
          tool_name: 'american socket set',
          user_id: 3,
          borrower_id: 2
        },
        {
          tool_name: 'metric socket set',
          user_id: 3,
          borrower_id: 1
        }
      ]);
    });
};