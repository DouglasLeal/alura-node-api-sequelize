const {Router} = require("express");

const Controller = require("../controllers/PessoaController.js");

const router = Router();

router
    .get("/pessoas", Controller.listar)
    .get("/pessoas/:id", Controller.buscarPorId)
    .post("/pessoas", Controller.criar);;

module.exports = router;