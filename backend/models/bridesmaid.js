// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Bridesmaid extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Bridesmaid.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     selectedCategory: DataTypes.STRING,
//     plusOneSelected: DataTypes.STRING,
//     plusOneFirstName: DataTypes.STRING,
//     plusOneLastName: DataTypes.STRING,
//     isAlsoInWeddingParty: DataTypes.STRING,
//     plusOneValue: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     modelName: 'Bridesmaid',
//     tableName: 'bridesmaids',
//   });
//   return Bridesmaid;
// };