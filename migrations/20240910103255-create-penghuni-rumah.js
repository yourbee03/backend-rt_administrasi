'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Penghuni_Rumahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penghuni_id: {
        type: Sequelize.INTEGER
      },
      rumah_id: {
        type: Sequelize.INTEGER
      },
      tanggal_mulai_huni: {
        type: Sequelize.DATE
      },
      tanggal_akhir_huni: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Penghuni_Rumahs');
  }
};