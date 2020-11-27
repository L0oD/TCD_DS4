module.exports = (sequelize, DataType) => sequelize.define('user', {
    id: {
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    username: {
      type: DataType.STRING
    },
    name: {
      type: DataType.STRING
    },
    email: {
      type: DataType.STRING
    },
    login: {
      type: DataType.STRING
    },
    password: {
      type: DataType.STRING
    }
  })