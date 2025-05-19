const { Sequelize, DataTypes } = require('sequelize');

// Dùng SQLite thay vì PostgreSQL
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // File SQLite sẽ nằm cùng thư mục
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false
});

module.exports = {
  sequelize,
  User
};
