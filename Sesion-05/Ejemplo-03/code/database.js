const { Sequelize } = require('sequelize');

// Exporting models
const NoteModel = require('./models/Note');

// Database connection
const sequelize = new Sequelize('api-notes', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Adding models
const models = [NoteModel];

// Registering models to Sequelize
for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;