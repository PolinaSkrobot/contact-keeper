const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
//const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
router.post(
  "/",
  body("name", "please, add name").notEmpty(),
  body("email", "please, include a valid email").isEmail(),
  body(
    "password",
    "please, enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  // [
  //   check("name", "please, add name").not().isEmpty(),
  //   check("email", "please, include a valid email").isEmail(),
  //   check(
  //     "password",
  //     "please, enter a password with 6 or more characters"
  //   ).isLength({ min: 6 }),
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("✅");
  }
);
module.exports = router;
