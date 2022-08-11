const express = require("express");
const router = express.Router();
// route        GET api/contacts
// description  Get all user's contacts
// access       private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});
// route        POST api/contacts
// description  Add new contact
// access       private
router.post("/", (req, res) => {
  res.send("Add contact");
});
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
