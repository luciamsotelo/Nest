// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('Groomsmans', [
//       {
//         firstName: 'John',
//         lastName: 'Doe',
//         selectedCategory: 'Category A',
//         plusOneSelected: 'Yes',
//         plusOneFirstName: 'Jane',
//         plusOneLastName: 'Doe',
//         isAlsoInWeddingParty: 'No',
//         plusOneValue: 1.5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         firstName: 'Mike',
//         lastName: 'Smith',
//         selectedCategory: 'Category B',
//         plusOneSelected: 'No',
//         plusOneFirstName: null,
//         plusOneLastName: null,
//         isAlsoInWeddingParty: 'Yes',
//         plusOneValue: null,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       }
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('Groomsmans', null, {});
//   }
// };
