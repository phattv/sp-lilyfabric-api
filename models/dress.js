'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dress = sequelize.define('Dress', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    features: {
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    category: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Dress;
};