// Imports
const router = require("express").Router();
const apiRoutes = require("./api");

// Routes
router.use("/api", apiRoutes);

// Exports
module.exports = router;
