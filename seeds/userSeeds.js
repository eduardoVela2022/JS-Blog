// Imports
const User = require("../models/User");

// User seed data
const userSeedData = [
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
  await User.create(userSeedData[0]);
  await User.create(userSeedData[1]);
  await User.create(userSeedData[2]);
}

// Exports
module.exports = createUserSeeds;
