'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dress = sequelize.define('Dress', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    features: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Dress;
};