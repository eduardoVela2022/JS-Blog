// Imports
const router = require("express").Router();
const { Comment, User } = require("../../models");

// This route creates a new comment and stores it in the database
router.post("/", async (req, res) => {
  try {
    // Gets the username of the user that posted the comment
    const user = await User.findByPk(req.session.user_id, {
      attributes: ["username"],
    });

    // Creates the content of the comment
    const content = `${req.body.content}
    
- Posted by ${user.username} on ${new Date().toDateString()}`;

    // Creates new comment and saves it to the database
    await Comment.create({
      content,
      postId: req.body.postId,
      userId: req.session.user_id,
    });

    // If the comment was created successfully, send success message
    res.status(200).end();
  } catch (err) {
    // Send error status, if something went wrong
    res.status(400).json(err);
  }
});

// Exports
module.exports = router;
