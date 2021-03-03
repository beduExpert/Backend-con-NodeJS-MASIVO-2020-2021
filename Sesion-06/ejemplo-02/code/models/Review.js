const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: DataTypes.TEXT,
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: function (review, options, fn) {
      review.createdAt = new Date();
      review.updatedAt = new Date();
      fn(null, review);
    },
    beforeUpdate: function (review, options, fn) {
      review.updatedAt = new Date();
      fn(null, review);
    },
  },
});