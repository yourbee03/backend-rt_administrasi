'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pembayaran', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penghuni_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Penghuni',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      rumah_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rumah',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      bulan: {
        type: Sequelize.DATE
      },
      iuran_kebersihan: {
        type: Sequelize.DECIMAL
      },
      iuran_satpam: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.ENUM('lunas', 'belum_lunas')
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
    await queryInterface.dropTable('Pembayaran');
  }
};
