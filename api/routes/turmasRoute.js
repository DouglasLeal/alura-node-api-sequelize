const { Router } = require('express')
const Controller = require('../controllers/TurmaController.js')
 
const router = Router()
router
 .get('/turmas', Controller.listar)
 .get('/turmas/:id', Controller.buscarPorId)
 .post('/turmas', Controller.criar)
 .put('/turmas/:id', Controller.atualizar)
 .delete('/turmas/:id', Controller.excluir)
module.exports = router