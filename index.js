const config = require("./config.json");
const express = require("express");
const app = express();
const chalk = require("chalk");

const backend = require("./backend.js");
backend.init(app);

app.get("/", function (req, res) {
    res.render("index.ejs");
});

app.get("*", function (req, res) {
    res.redirect("/");
});

app.listen(config.port);

process.on("unhandledRejection", (err) => {
    if (config.debugMode) console.log(chalk.red(err));
});
