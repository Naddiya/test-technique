'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  animes.init({
    title: DataTypes.JSON,
    coverImage: DataTypes.JSON,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'animes',
  });
  return animes;
};