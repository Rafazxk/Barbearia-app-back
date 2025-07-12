const { lerAgendamentos, salvarAgendamentos } = require('../dbFake');

// GET /api/agendamentos
exports.getTodos = (req, res) => {
  const agendamentos = lerAgendamentos();
  res.json(agendamentos);
};

// POST /api/agendamentos
exports.criarAgendamento = (req, res) => {
  const { nome, telefone, data, hora, barbeiro, servico } = req.body;
  if (!nome || !telefone || !data || !hora || !barbeiro || !servico) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }

  const novoAgendamento = {
    id: Date.now(),
    nome,
    telefone,
    data,
    hora,
    barbeiro,
    servico,
  };

  const agendamentos = lerAgendamentos();
  agendamentos.push(novoAgendamento);
  salvarAgendamentos(agendamentos);

  res.status(201).json(novoAgendamento);
};

// DELETE /api/agendamentos/:id
exports.excluirAgendamento = (req, res) => {
  const id = Number(req.params.id);
  const agendamentos = lerAgendamentos();
  const filtrados = agendamentos.filter(ag => ag.id !== id);

  if (agendamentos.length === filtrados.length) {
    return res.status(404).json({ error: 'Agendamento não encontrado' });
  }

  salvarAgendamentos(filtrados);
  res.status(200).json({ success: true });
};