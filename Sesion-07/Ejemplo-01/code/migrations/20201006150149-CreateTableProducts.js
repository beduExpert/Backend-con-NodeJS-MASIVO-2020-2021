'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('products', {
       id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
       name: Sequelize.STRING,
       description: Sequelize.TEXT,
       price: Sequelize.FLOAT,
       image: Sequelize.STRING,
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.droptabke('products');
  }
};
