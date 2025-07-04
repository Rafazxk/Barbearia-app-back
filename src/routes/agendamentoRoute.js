const express = require('express')
const router = express.Router()

const controller = require('../controllers/agendamentoController')

router.get('/', controller.getTodos);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);   
router.delete('/:id', controller.deletar);

module.exports = router