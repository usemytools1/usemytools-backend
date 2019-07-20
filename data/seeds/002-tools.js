exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tools')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([{
          name: 'saw',
          username: 'David',
          borrower_id: 2,
          desc: "cuts things"
        },
        {
          name: 'hammer',
          username: 'Greg',
          borrower_id: 3,
          desc: "hits things"

        },
        {
          name: 'drill',
          username: 'Carlos',
          borrower_id: 4,
          desc: "puts holes in things"
        },
        {
          name: 'handtruck',
          username: 'Chaz',
          borrower_id: 1,
          desc: "moves heavy things"
        },
        {
          name: 'wheelbarrow',
          username: 'David',
          borrower_id: 4,
          desc: "carries things"
        }
      ]);
    });
};