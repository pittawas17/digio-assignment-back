const express = require("express");
const app = express();
const chalk = require("chalk");
const cors = require("cors");
var mongoose = require("mongoose");

// connect to MongoDB
var mongo_uri = "mongodb+srv://admin:lOGaXw47949wqukS@cluster0.f3c0b.mongodb.net/digio-assignment-db?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log(chalk.green.inverse(" Success ") + chalk.green(" Connected to the MongoDB database."));
    },
    (error) => {
        console.log(chalk.red.inverse(" Failed ") + chalk.red(" Connection failed: " + error));
        process.exit();
    }
);

// set port
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

// require routers from "routers" folder
const matchHistory = require("./routers/matchHistoryRouter");

// use router
app.use(matchHistory);

// run application
app.listen(port, () => {
    console.log(chalk.green.inverse(" Success ") + chalk.green(" Application is running on port " + port));
});
