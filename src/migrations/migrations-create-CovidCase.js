//tự động áp vào database
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CovidCases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      totalCaseNumber: {
        type: Sequelize.STRING
      },
      caseDeath: {
        type: Sequelize.STRING
      },
      increaseCase: {
        type: Sequelize.STRING
      },
      dayUpdate: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CovidCases');
  }
};

