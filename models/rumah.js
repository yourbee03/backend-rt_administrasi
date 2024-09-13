'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rumah extends Model {
    static associate(models) {
      // define association here
    }
  }
  Rumah.init({
    alamat: DataTypes.STRING,
    status_huni: {
      type: DataTypes.ENUM,
      values: ['dihuni', 'tidak dihuni']
    }
  }, {
    sequelize,
    modelName: 'Rumah',
    tableName: 'rumah'
  });
  return Rumah;
};
