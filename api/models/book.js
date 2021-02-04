

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
  });

  return Book;
};
