const express = require("express");
const router = express.Router();

// prices model
const Prices = require("../../models/Prices");

// @route GET api/prices
// @desc Get all prices
// @access Public
router.get("/", (req, res) => {
    Prices.find()
        .sort({ dateEdited: -1 })
        .then(prices => res.json(prices));
});

// @route POST api/prices
// @desc Create a prices
// @access Private
router.post("/", (req, res) => {
    const newPrices = new Prices({
        description: req.body.description,
        amount: req.body.amount,
        basis: req.body.basis
    });
    newPrices.save().then(prices => res.json(prices));
});

// @route DELETE api/prices/:id
// @desc Delete a prices
// @access Private
router.delete("/:id", (req, res) => {
    Prices.findById(req.params.id)
        .then(prices => prices.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
