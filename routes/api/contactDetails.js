const express = require("express");
const router = express.Router();

// data model
const ContactDetails = require("../../models/ContactDetails");

// @route GET api/contactDetails
// @desc Get all contactDetails
// @access Public
router.get("/", (req, res) => {
  ContactDetails.find()
    .sort({ dateEdited: -1 })
    .then(data => res.json(data));
});

// @route POST api/contactDetails
// @desc Create a contactDetail
// @access Private
router.post("/", (req, res) => {
  const newContactDetail = new ContactDetails({
    type: req.body.type,
    value: req.body.value
  });
  console.log(newContactDetail);
  newContactDetail
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route DELETE api/contactDetails/:id
// @desc Delete a contactDetail
// @access Private
router.delete("/:id", (req, res) => {
  ContactDetails.findById(req.params.id)
    .then(data => data.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
