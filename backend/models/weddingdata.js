// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class WeddingData extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   WeddingData.init({
//     brideFirstName: DataTypes.STRING,
//     brideLastName: DataTypes.STRING,
//     brideSelection: DataTypes.STRING,
//     groomFirstName: DataTypes.STRING,
//     groomLastName: DataTypes.STRING,
//     groomSelection: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'WeddingData',
//     tableName: 'weddingdata',
    
//   });
//   return WeddingData;
// };