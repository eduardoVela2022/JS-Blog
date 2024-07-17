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
    res.render("dashboard", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route is for the post view
router.get("/post/:id", async (req, res) => {
  try {
    // Gets the post with the given id, along with the username of the user that created it and its comments
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, attributes: ["content"] },
      ],
    });

    // Converts the obtained posts into plain objects
    const post = postData.get({ plain: true });

    // Renders the post view with the obtained data
    res.status(200).end();
  } catch (err) {
    console.log(err);
    // Send error status, if something went wrong
    res.status(500).json(err);
  }
});

// This route is for the create post form
router.get("/create-post", (req, res) => {
  // Render the create post view
  res.render("create-post", { logged_in: req.session.logged_in });
});

// This route is for the modify and delete post form
router.get("/modify-delete-post/:id", async (req, res) => {
  // Gets the post with the given id
  const postData = await Post.findByPk(req.params.id);

  // Converts the obtained post into a plain object
  const post = postData.get({ plain: true });

  // Render the modify and delete post form view with the obtained data
  res.render("modify-delete-post", { post, logged_in: req.session.logged_in });
});

// This route is for the create comment form
router.get("/create-comment", (req, res) => {
  // Render the create comment view
  res.render("create-comment", { logged_in: req.session.logged_in });
});

// This route is for the login view
router.get("/login", (req, res) => {
  // If user is already logged in, go to the homepage view
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // Render the login view
  res.render("login");
});

// This route is for the sign up view
router.get("/sign-up", (req, res) => {
  // If user is already logged in, go to the homepage view
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // Render the sign up view
  res.render("sign-up");
});

// Exports
module.exports = router;
