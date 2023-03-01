const express = require("express");
const pessoas = require("./pessoasRoute.js");
const turmas = require("./turmasRoute.js");
const niveis = require("./niveisRoute.js");

const routes = (app) => {
    app.get("/", (req, res) => {res.send("Hello")});

    app.use(
        express.json(),
        pessoas,
        turmas,
        niveis
        );    
}

module.exports = routes;