// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Guest extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Guest.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     selectedCategory: DataTypes.STRING,
//     brideGroomOrMutual: DataTypes.STRING,
//     guestValue: DataTypes.DECIMAL,
//     plusOneSelected: DataTypes.STRING,
//     plusOneFirstName: DataTypes.STRING,
//     plusOneLastName: DataTypes.STRING,
//     plusOneValue: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     modelName: 'Guest',
//     tableName: 'guests',
    
//   });
//   return Guest;
// };