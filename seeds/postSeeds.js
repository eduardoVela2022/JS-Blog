// Imports
const Post = require("../models/Post");

// Post seed data
let postSeedData = [
  {
    title: "Title #1",
    content: "Content #1",
    userId: 1,
  },
  {
    title: "Title #2",
    content: "Content #2",
    userId: 1,
  },
  {
    title: "Title #3",
    content: "Content #3",
    userId: 2,
  },
  {
    title: "Title #4",
    content: "Content #4",
    userId: 3,
  },
];

// Creates the post seeds
async function createPostSeeds() {
  await Post.bulkCreate(postSeedData);
}

// Exports
module.exports = createPostSeeds;
