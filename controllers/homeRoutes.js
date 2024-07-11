// Imports
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

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
    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route is for the dashboard view
router.get("/dashboard", async (req, res) => {
  try {
    // Gets all the posts from the database that contain the logged in user's id
    const postData = await Post.findAll({
      where: { userId: req.session.user_id },
    });

    // Converts the obtained posts into plain objects
    const posts = postData.map((post) => post.get({ plain: true }));

    // Renders the dashboard view with the obtained data
    res.status(200).json(posts);
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route is for the post view
router.get("/post/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    // Gets the post with the given id, along with the username of the user that created it and its comments
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, attributes: ["content"] },
      ],
    });

    // Converts the obtained posts into plain objects
    const posts = postData.get({ plain: true });

    // Renders the post view with the obtained data
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
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
  res.status(200).json("Load log in view");
});

// This route is for the sign up view
router.get("/sign-up", (req, res) => {
  // Render the sign up view
  res.status(200).json("Load sign up view");
});

// Exports
module.exports = router;
