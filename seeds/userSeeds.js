// Imports
const User = require("../models/User");

// User seed data
let userSeedData = [
  {
    username: "Alan García",
    password: "alanG@rcia2001",
  },
  {
    username: "Jesse Rodriguez",
    password: "j3sse#1999",
  },
  {
    username: "Richard Torrez",
    password: "T0rrez$2000",
  },
];

// Creates the user seeds
async function createUserSeeds() {
  await User.bulkCreate(userSeedData);
}

// Exports
module.exports = createUserSeeds;
