//khai báo kiểu dữ liệu từ các mục đã tạo ở seeder/historyhistoryCovidCases
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historyCovidCase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here - định danh các mối quan hệ (n-n, 1-n)
    }
  };
  historyCovidCase.init({
   // id: DataTypes.STRING,
    city: DataTypes.STRING,
    increaseCase: DataTypes.STRING,
    dayUpdate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'historyCovidCase',
  });
  return historyCovidCase;
};