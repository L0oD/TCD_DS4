const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './coindex.db',
  logging: true // se verdadeiro, vai logar as queries SQL no terminal durante a execução
});

sequelize.User = sequelize.import('./User.js');

// Sincroniza as definições de models com o banco de dados
sequelize.sync();

module.exports = sequelize; 