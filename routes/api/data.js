const express = require("express");
const router = express.Router();

// data model
const Data = require("../../models/Data");

// @route GET api/data
// @desc Get all data
// @access Public
router.get("/", (req, res) => {
  Data.find()
    .sort({ dateEdited: 1 })
    .then(datas => res.json(datas));
});

// @route POST api/data
// @desc Create an data
// @access Private
router.post("/", (req, res) => {
  const newData = new Data({
    title: req.body.title,
    value: req.body.value
  });
  newData.save().then(data => res.json(data));
});

// @route DELETE api/data/:id
// @desc Delete an data
// @access Private
router.delete("/:id", (req, res) => {
  Data.findById(req.params.id)
    .then(data => data.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
