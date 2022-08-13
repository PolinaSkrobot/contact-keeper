const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");
// route        GET api/contacts
// description  Get all user's contacts
// access       private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});
// route        POST api/contacts
// description  Add new contact
// access       private
router.post(
  "/",
  [auth, body("name", "please, add name").notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);
// route        PUT api/contacts/:id
// description  Update contact
// access       private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});
// route        DELETE api/contacts/:id
// description  Delete contact
// access       private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});
module.exports = router;
