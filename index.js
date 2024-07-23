const express = require('express');
const rotas = require('./src/router'); 
const validarSenha = require('./src/intermediarios');

const app = express();

app.use(express.json()); 

app.use(validarSenha); 

app.use('/api', rotas); 

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
});
