"use strict";
module.exports = (sequelize, DataTypes) => {
  const foodcrud = sequelize.define(
    "foodcrud",
    {
      id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
      },
      foodName: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    { freezeTableName: true, timestamps: false }
  );
  foodcrud.associate = function (models) {};
  return foodcrud;
};
