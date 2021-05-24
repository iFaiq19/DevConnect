const express = require("express");
const router = express.Router();

// Load user model
const User = require("../../models/Users");

// @route GET api/users/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ message: "Users works" }));

// @route GET api/users/register
// @desc Register users
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: request.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: request.body.name,
        email: request.body.email,
        avatar: avatar,
        password: request.body.password,
      });
    }
  });
});

module.exports = router;
