// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('Guests', [
//       {
//         firstName: 'Alice',
//         lastName: 'Smith',
//         selectedCategory: 'Category A',
//         brideGroomOrMutual: 'Bride',
//         guestValue: 2.0,
//         plusOneSelected: 'Yes',
//         plusOneFirstName: 'John',
//         plusOneLastName: 'Doe',
//         plusOneValue: 1.5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         firstName: 'Emma',
//         lastName: 'Johnson',
//         selectedCategory: 'Category B',
//         brideGroomOrMutual: 'Mutual',
//         guestValue: 1.5,
//         plusOneSelected: 'No',
//         plusOneFirstName: null,
//         plusOneLastName: null,
//         plusOneValue: null,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       }
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('Guests', null, {});
//   }
// };
