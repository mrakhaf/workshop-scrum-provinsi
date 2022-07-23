const { DataTypes } = require('sequelize');
const db = require('../database');

const Post = db.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }, 
  title: DataTypes.STRING(80),
  content: DataTypes.TEXT,
})

module.exports = Post;