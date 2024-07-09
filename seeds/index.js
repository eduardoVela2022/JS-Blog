// Imports
const sequelize = require("../config/connection");
const createCommentSeeds = require("./commentSeeds");
const createPostSeeds = require("./postSeeds");
const createUserSeeds = require("./userSeeds");

// Creates all the seeds of all the database models
async function createAllSeeds() {
  // Database connection
  await sequelize.sync({ force: true });
  console.log("\n --- Database connection established --- \n");

  // Creates the user seeds
  await createUserSeeds();
  console.log("\n --- User seeds created --- \n");

  // Creates the post seeds
  await createPostSeeds();
  console.log("\n --- User seeds created --- \n");

  // Creates the comment seeds
  await createCommentSeeds();
  console.log("\n --- User seeds created --- \n");

  // Ends process
  process.exit(0);
}

// Execute
createAllSeeds();
