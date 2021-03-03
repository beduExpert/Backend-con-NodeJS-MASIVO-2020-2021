const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  type: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});