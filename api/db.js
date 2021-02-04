
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');

const user = require('./models/user');
const book = require('./models/book');
const chapter = require('./models/chapter');

const basename = path.basename(__filename);

module.exports = () => new Promise((resolve, reject) => {
  const db = {};

  const sequelize = new Sequelize(process.env.DB_CONNECTIONSTRING, {
    dialect: 'postgres',
  });

  // Init models
  user(sequelize);
  book(sequelize);
  chapter(sequelize);

  // Create associations
  const models = sequelize.models;
  models.book.hasMany(models.chapter);
  models.chapter.belongsTo(models.book);

  // N:M
  models.user.belongsToMany(models.book, { through: 'UsersBooks' });
  models.book.belongsToMany(models.user, { through: 'UsersBooks' });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  resolve(db);
});
