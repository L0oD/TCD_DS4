module.exports = (sequelize, DataType) => sequelize.define('produto', {
    id: {
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    codigo: {
        type: DataType.STRING
      },
    name: {
      type: DataType.STRING
    },
    qtde: {
      type: DataType.FLOAT
    },
    indice: {
      type: DataType.FLOAT
    },
    valor_total: {
        type: DataType.FLOAT
      }
  })