// Checks if the user is authentificated
const withAuth = (req, res, next) => {
  // If the user is not logged in, go to login view
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    // Else go to the selected view
    next();
  }
};

// Exportss
module.exports = withAuth;
