const config = require("./config.json");
const express = require("express");
const chalk = require("chalk");
const figlet = require("figlet");

async function init(app) {
    app.set("views", "./src/views");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use("/assets", express.static(__dirname + "/public/assets"));
    app.use("/assets", express.static(__dirname + "/src/static/assets"));

    figlet.text("Warm Mitten", { font: "Standard", width: 700 }, function (err, data) {
        if (err) return;
        const str = `${data}\n-------------------------------------------\n${config.business.name} is running on port ${config.port}!`;
        console.log(chalk.bold(chalk.magenta(str)));
    });

    app.locals = {
        config: config,
        business: config.business
    };
}

module.exports = {
    init: init
};
