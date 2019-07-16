const express = require("express");
const router = express.Router();

// data model
const Data = require("../../models/Data");

// @route GET api/datas
// @desc Get all data
// @access Public
router.get("/", (req, res) => {
  Data.find()
    .sort({ date: -1 })
    .then(datas => res.json(datas));
});

// @route POST api/datas
// @desc Create an data
// @access Private
router.post("/", auth, (req, res) => {
  const newData = new Data({
    title: req.body.title,
    value: req.body.value
  });
  newData.save().then(data => res.json(data));
});

// @route DELETE api/datas/:id
// @desc Delete an data
// @access Private
router.delete("/:id", auth, (req, res) => {
  Data.findById(req.params.id)
    .then(data => data.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
