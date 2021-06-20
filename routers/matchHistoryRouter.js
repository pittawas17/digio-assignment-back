const express = require("express");
const router = new express.Router();
const chalk = require("chalk");
const MatchHistory = require("../models/matchHistoryModels");

// ---------- get ----------

// get all match history
router.get("/match", async (req, res) => {
    MatchHistory.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        console.log(chalk.cyan.inverse(" GET "), chalk.cyan("Get all match history"));
        res.status(200).send(data);
    });
});

// ---------- post ----------

// add new match result to history
router.post("/match", (req, res) => {
    let body = req.body;
    body.dateTime = Date.now();
    let obj = new MatchHistory(body);
    obj.save((err, data) => {
        if (err) return res.status(400).send(err);
        console.log(chalk.blue.inverse(" ADD "), chalk.blue("Saved new match history"));
        res.status(200).send("saved" + data);
    });
});

module.exports = router;
