'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pengeluaran', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategori: {
        type: Sequelize.ENUM('perbaikan jalan', 'gaji satpam', 'dll.')
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.DECIMAL
      },
      tanggal_pengeluaran: {
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
    await queryInterface.dropTable('Pengeluaran');
  }
};
