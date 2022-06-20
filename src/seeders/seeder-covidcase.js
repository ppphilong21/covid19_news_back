'use strict';
//tạo cơ sở dữ liệu để up lên php
module.exports = {
  //ham up để thêm dữ liệu
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CovidNews', [{
      city: 'Hà Nội',
      caseNumber: '6',
      totalCasePerDay: '100',
      dayUpdate: '06/08/2022',
    }]);
  },
  //down chạy khi rollback(bị lỗi và quay về lúc k lỗi)
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
