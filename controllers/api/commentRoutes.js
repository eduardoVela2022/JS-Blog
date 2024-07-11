// Imports
const router = require("express").Router();
const { Comment } = require("../../models");

// This route creates a new comment and stores it in the database
router.post("/", async (req, res) => {
  try {
    // Creates new comment and saves it to the database
    const newPost = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });

    // If the comment was created successfully, send success message
    res.status(200).json(newPost);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(400).json(err);
  }
});

// Exports
module.exports = router;
