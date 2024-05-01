// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('WeddingData', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       brideFirstName: {
//         type: Sequelize.STRING
//       },
//       brideLastName: {
//         type: Sequelize.STRING
//       },
//       brideSelection: {
//         type: Sequelize.STRING
//       },
//       groomFirstName: {
//         type: Sequelize.STRING
//       },
//       groomLastName: {
//         type: Sequelize.STRING
//       },
//       groomSelection: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('WeddingData');
//   }
// };
