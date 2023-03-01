const { Router } = require('express')
const Controller = require('../controllers/NivelController.js')
 
const router = Router()
router
 .get('/niveis', Controller.listar)
 .get('/niveis/:id', Controller.buscarPorId)
 .post('/niveis', Controller.criar)
 .put('/niveis/:id', Controller.atualizar)
 .delete('/niveis/:id', Controller.excluir)
module.exports = router