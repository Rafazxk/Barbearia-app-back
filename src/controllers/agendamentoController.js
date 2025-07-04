const db = require('../db');

// Lista todos os agendamentos
exports.getTodos = (req, res) => {
  const agendamentos = db.prepare('SELECT * FROM agendamentos').all();
  res.json(agendamentos);
};

// Cria um novo agendamento
exports.criar = (req, res) => {
  const { nome, telefone, data, hora, barbeiro } = req.body;

  const stmt = db.prepare(`
    INSERT INTO agendamentos (nome, telefone, data, hora, barbeiro)
    VALUES (?, ?, ?, ?, ?)
  `);

  const info = stmt.run(nome, telefone, data, hora, barbeiro);

  res.status(201).json({ id: info.lastInsertRowid, nome, telefone, data, hora, barbeiro });
};

// Atualiza um agendamento
exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { nome, telefone, data, hora, barbeiro } = req.body;

  const stmt = db.prepare(`
    UPDATE agendamentos
    SET nome = ?, telefone = ?, data = ?, hora = ?, barbeiro = ?
    WHERE id = ?
  `);

  stmt.run(nome, telefone, data, hora, barbeiro, id);

  res.json({ id, nome, telefone, data, hora, barbeiro });
};

// Deleta um agendamento
exports.deletar = (req, res) => {
  const { id } = req.params;

  db.prepare('DELETE FROM agendamentos WHERE id = ?').run(id);

  res.status(204).send();
};
