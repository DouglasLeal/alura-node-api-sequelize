import db from "../models/index.js";

class PessoaController {
    static async listar(req, res) {
        try {
            const pessoas = await db.Pessoas.findAll();

            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default PessoaController;