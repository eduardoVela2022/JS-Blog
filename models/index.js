// Imports
const Post = require("./Post");
const User = require("./User");

// One user has many posts, and one post has one user
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

// Exports
module.exports = {};
