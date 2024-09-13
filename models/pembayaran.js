'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    static associate(models) {
      // Relasi ke penghuni dan rumah
      Pembayaran.belongsTo(models.Penghuni, { foreignKey: 'penghuni_id' });
      Pembayaran.belongsTo(models.Rumah, { foreignKey: 'rumah_id' });
    }
  }
  Pembayaran.init({
    penghuni_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Penghuni',
        key: 'id'
      }
    },
    rumah_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rumah',
        key: 'id'
      }
    },
    bulan: DataTypes.DATE,
    iuran_kebersihan: DataTypes.DECIMAL(10, 2),
    iuran_satpam: DataTypes.DECIMAL(10, 2),
    status: {
      type: DataTypes.ENUM,
      values: ['lunas', 'belum_lunas']
    }
  }, {
    sequelize,
    modelName: 'Pembayaran',
    tableName: 'pembayaran'

  });
  return Pembayaran;
};
