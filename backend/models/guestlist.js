// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Guestlist extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Guestlist.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     selectedCategory: DataTypes.STRING,
//     brideGroomOrMutual: DataTypes.STRING,
//     guestValue: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     modelName: 'Guestlist',
//     tableName: 'guestlists',
    
//   });
//   return Guestlist;
// };