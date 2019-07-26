exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tools")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tools").insert([
        {
          name: "saw",
          username: "David",
          borrower: "Chaz",
          desc: "cuts things"
        },
        {
          name: "hammer",
          username: "Greg",
          borrower: "David",
          desc: "hits things"
        },
        {
          name: "drill",
          username: "Carlos",
          borrower: "Greg",
          desc: "puts holes in things"
        },
        {
          name: "handtruck",
          username: "Chaz",
          borrower: "Carlos",
          desc: "moves heavy things"
        },
        {
          name: "wheelbarrow",
          username: "David",
          borrower: "Jack",
          desc: "carries things"
        }
      ]);
    });
};
