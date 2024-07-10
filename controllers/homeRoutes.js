// Imports
const router = require("express").Router();
const { Post, User } = require("../models");

// This route is for the homepage view
router.get("/", async (req, res) => {
  try {
    // Gets all the posts from the database, along with the username of the user that created them
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });

    // Converts the obtained posts into plain objects
    const posts = postData.map((post) => post.get({ plain: true }));

    // Renders the homepage view with the obtained data
    res.status(200).json(posts);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route is for the login view
router.get("/login", (req, res) => {
  // If the user is "logged in" in its session, redirect it to the dashboard
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  // Else render the login view
  res.status(200).json("Load login view");
});

// This route is for the sign up view
router.get("/sign-up", (req, res) => {
  // Render the sign up view
  res.status(200).json("Load login view");
});

// Exports
module.exports = router;
