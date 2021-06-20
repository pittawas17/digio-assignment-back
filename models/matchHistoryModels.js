var mongoose = require("mongoose");

var matchSchema = mongoose.Schema(
    {
        player1: {
            // player1: [0, 1, 2]
            type: Array,
        },
        player2: {
            // player1: [3, 4]
            type: Array,
        },
        winner: {
            // winner: "Player 1" or "Player 2" or "Draw"
            type: String,
        },
        dateTime: {
            // dateTime: 2021-06-20T19:09:15.241+00:00
            type: Date,
        },
        tableSize: {
            // tableSize: 3 or else (greater than 3)
            type: Number,
        },
    },
    {
        // MongoDB collection
        collection: "match_history",
    }
);

var MatchHistory = mongoose.model("match_history", matchSchema);

module.exports = MatchHistory;
