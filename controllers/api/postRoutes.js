const { Post } = require("../../models");

// Imports
const router = require("express").Router();

// This route creates a new post and stores it in the database
router.post("/", async (req, res) => {
  try {
    // Creates new post and saves it to the database
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    // If the post was created successfully, send success message
    res.status(200).json(newPost);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(400).json(err);
  }
});

// This route updates a post from the database
router.put("/:id", async (req, res) => {
  try {
    // Finds the post that matches the given id and has the user's id
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    // If post wasn't found, send error status and message and end the process
    if (!postData) {
      res
        .status(404)
        .json({ message: "The requested post to update wasn't found!" });
      return;
    }

    // Else if it was found and updated, send success status
    res.status(200).json(postData);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route deletes a post from the database
router.delete("/:id", async (req, res) => {
  try {
    // Finds the post that matches the given id and has the user's id
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    // If post wasn't found, send error status and message and end the process
    if (!postData) {
      res
        .status(404)
        .json({ message: "The requested post to delete wasn't found!" });
      return;
    }

    // Else if it was found and deleted, send success status
    res.status(200).json(postData);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// Exports
module.exports = router;
