const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

// Protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
});

module.exports = router;