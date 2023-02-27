const express = require("express");
const pessoas = require("./pessoasRoute.js");

const routes = (app) => {
    app.get("/", (req, res) => {res.send("Hello")});

    app.use(
        express.json(),
        pessoas
        );    
}

module.exports = routes;