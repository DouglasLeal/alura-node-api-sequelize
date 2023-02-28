const db = require("../models");

class PessoaController {
    static async listar(req, res) {
        try {
            const pessoas = await db.Pessoas.findAll();

            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPorId(req, res){
        try {
            const {id} = req.params;
            const pessoa = await db.Pessoas.findOne({where: {id}});

            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criar(req, res){

    }
}

module.exports = PessoaController;