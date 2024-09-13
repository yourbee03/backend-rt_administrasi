'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengeluaran extends Model {
    static associate(models) {
      // define association here
    }
  }
  Pengeluaran.init({
    kategori: {
      type: DataTypes.ENUM,
      values: ['perbaikan jalan', 'gaji satpam', 'token listrik pos satpam', 'lainnya']
    },
    deskripsi: DataTypes.STRING,
    jumlah: DataTypes.DECIMAL(10, 2),
    tanggal_pengeluaran: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pengeluaran',
    tableName: 'pengeluaran'

  });
  return Pengeluaran;
};
