// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Comment class is created
class Comment extends Model {}

// Comment model
Comment.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Content
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The user the comment belongs to
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // The post the comment belongs to
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    // Model configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

// Exports
module.exports = Comment;
