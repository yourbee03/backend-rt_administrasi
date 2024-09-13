'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Penghuni', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      foto_ktp: {
        type: Sequelize.STRING
      },
      status_penghuni: {
        type: Sequelize.ENUM('kontrak', 'tetap')
      },
      nomor_telepon: {
        type: Sequelize.INTEGER
      },
      status_perkawinan: {
        type: Sequelize.ENUM('menikah', 'belum menikah')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Penghuni');
  }
};
