const Database = require('better-sqlite3');

// Cria (ou abre) o arquivo do banco de dados
const db = new Database('barbearia.db');

// Cria a tabela de agendamentos, se ainda não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS agendamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    telefone TEXT NOT NULL,
    data TEXT NOT NULL,
    hora TEXT NOT NULL,
    barbeiro TEXT NOT NULL
  )
`).run();

module.exports = db;