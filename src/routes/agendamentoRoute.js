const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.get('/', agendamentoController.getTodos);
router.post('/', agendamentoController.criarAgendamento);
router.delete('/:id', agendamentoController.excluirAgendamento);

module.exports = router;