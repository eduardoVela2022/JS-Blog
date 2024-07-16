// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Post class is created
class Post extends Model {}

// Post model
Post.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Title
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Content
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // The user the post belongs to
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // Model configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

// Exports
module.exports = Post;
