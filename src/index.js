const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PRINCIPAL (precisa vir antes do listen)
app.get('/', (req, res) => {
  res.send('API da Barbearia está funcionando! 💈');
});

const agendamentoRoutes = require('./routes/agendamentoRoute');
app.use('/api/agendamentos', agendamentoRoutes);

// PORTA DO FLY.IO
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
