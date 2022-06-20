//khai báo kiểu dữ liệu từ các mục đã tạo ở seeder/CovidNewss
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CovidNews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here - định danh các mối quan hệ (n-n, 1-n)
    }
  };
  CovidNews.init({
   // id: DataTypes.STRING,
    type: DataTypes.STRING,
    headingTitle: DataTypes.STRING,
    subTitle: DataTypes.STRING,
    linkNews: DataTypes.STRING,
    linkImage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CovidNew',
  });
  return CovidNews;
};