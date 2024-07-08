// Imports
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// User class is created
class User extends Model {
  validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

// User model
User.init(
  {
    // Id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Username
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Must be at least 8 characters long
      },
    },
  },
  {
    hooks: {
      // Encrypts the new user's password
      beforeCreate: async (newUser) => {
        newUser.password = bcrypt.hash(newUser.password, 10);
        return newUser;
      },
    },
    // Model configuration
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// Exports
module.exports = User;
