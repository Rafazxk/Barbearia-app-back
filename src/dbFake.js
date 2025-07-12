const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'dados', 'agendamentos.json')

function lerAgendamentos() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
  const conteudo = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(conteudo || '[]')
}

function salvarAgendamentos(dados) {
  fs.writeFileSync(filePath, JSON.stringify(dados, null, 2), 'utf-8')
}

module.exports = {
  lerAgendamentos,
  salvarAgendamentos
}