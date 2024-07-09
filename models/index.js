// Imports
const Comment = require("./Comment");
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

// One user has many comments, and one comment has one user
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

// One post has many comments, and one comment has one post
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "postId",
});

// Exports
module.exports = {
  User,
  Post,
  Comment,
};
