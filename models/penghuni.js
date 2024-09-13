'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penghuni extends Model {
    static associate(models) {
      Penghuni.belongsToMany(models.Rumah, {
        through: 'PenghuniRumah', 
        as: 'rumah',
        foreignKey: 'penghuni_id',
      });
    }
  }
  Penghuni.init({
    nama_lengkap: DataTypes.STRING,
    foto_ktp: DataTypes.STRING,
    status_penghuni: {
      type: DataTypes.ENUM,
      values: ['kontrak', 'tetap']
    },
    nomor_telepon: DataTypes.STRING,
    status_perkawinan: {
      type: DataTypes.ENUM,
      values: ['menikah', 'belum menikah']
    }
  }, {
    sequelize,
    modelName: 'Penghuni',
    tableName: 'penghuni'

  });
  return Penghuni;
};
