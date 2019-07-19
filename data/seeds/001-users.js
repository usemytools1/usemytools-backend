// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex('users')
//     // .truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([{
//           username: 'David',
//           password: 'test'
//         },
//         {
//           username: 'Greg',
//           password: 'test'
//         },
//         {
//           username: 'Carlos',
//           password: 'test'
//         },
//         {
//           username: 'Chaz',
//           password: 'test'
//         }
//       ]);
//     });
// };

const cleaner = require("knex-cleaner");

exports.seed = async function (knex) {
  await cleaner.clean(knex);
};