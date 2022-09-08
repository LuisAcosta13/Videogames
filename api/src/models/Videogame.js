const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    launch_date: {
      type: DataTypes.DATEONLY
    },
    rating:{
      type: DataTypes.INTEGER
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  sequelize.define('Genre', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING
    }
  })
};
