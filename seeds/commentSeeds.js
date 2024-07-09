// Imports
const Comment = require("../models/Comment");

// Comment seed data
let commentSeedData = [
  {
    content: "Comment #1",
    userId: 1,
    postId: 3,
  },
  {
    content: "Comment #2",
    userId: 1,
    postId: 4,
  },
  {
    content: "Comment #3",
    userId: 1,
    postId: 4,
  },
  {
    content: "Comment #4",
    userId: 1,
    postId: 1,
  },
];

// Creates the comment seeds
async function createCommentSeeds() {
  await Comment.bulkCreate(commentSeedData);
}

// Exports
module.exports = createCommentSeeds;
