// Imports
const router = require("express").Router();
const { User } = require("../../models");

// Signs up a new user
router.post("/", async (req, res) => {
  try {
    // New use is created with the request data
    const userData = await User.create(req.body);

    // User is logged in and its session is created
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Send success status
      res.status(200).json(userData);
    });
  } catch (err) {
    // Send error status, if something went wrong
    res.status(400).json(err);
  }
});

// Logs in a user that already has an account
router.post("/login", async (req, res) => {
  try {
    // Tries to find a user with the given email in the database
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user was found, send error status and message and end the process
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Checks if the given password for the given account is valid
    const validPassword = userData.validatePassword(req.body.password);

    // If the password is not valid, send error status and message and end the process
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Else if the password was valid, log in the user and create its session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Send success status
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    // Send error status, if something went wrong
    res.status(400).json(err);
  }
});

// Logs out the user by deleting its session
router.post("/logout", (req, res) => {
  // If the user is logged in
  if (req.session.logged_in) {
    // Destroy its session
    req.session.destroy(() => {
      // Send success status
      res.status(204).end();
    });
  } else {
    // Else send error status
    res.status(404).end();
  }
});

// Exports
module.exports = router;
