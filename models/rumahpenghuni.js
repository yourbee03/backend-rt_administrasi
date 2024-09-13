// models/RumahPenghuni.js
module.exports = (sequelize, DataTypes) => {
  const RumahPenghuni = sequelize.define('RumahPenghuni', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rumah_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Rumah', key: 'id' },
      allowNull: false
    },
    penghuni_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Penghuni', key: 'id' },
      allowNull: false
    },
    tanggal_mulai_huni: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tanggal_akhir_huni: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'rumah_penghuni',
  });

  RumahPenghuni.associate = (models) => {
    RumahPenghuni.belongsTo(models.Rumah, { foreignKey: 'rumah_id' });
    RumahPenghuni.belongsTo(models.Penghuni, { foreignKey: 'penghuni_id' });
  };

  return RumahPenghuni;
};
