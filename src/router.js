const express = require('express');
const {
    listaVoluntarios,
    obterVoluntario,
    adicionarVoluntario,
    deletarVoluntario
} = require('./controlles/voluntarios');

const {
    listarOportunidades,
    obterOportunidade,
    adicionarOportunidade,
    atualizarOportunidade,
    deletarOportunidade
} = require('./controlles/oportunidades');

const {
    listarFeedbacks,
    obterFeedback,
    adicionarFeedback,
    atualizarFeedback,
    deletarFeedback
} = require('./controlles/feedbacks');

const rotas = express.Router();

// Rotas para voluntários
rotas.get('/voluntarios', listaVoluntarios);
rotas.get('/voluntarios/:id', obterVoluntario);
rotas.post('/voluntarios', adicionarVoluntario);
rotas.delete('/voluntarios/:id', deletarVoluntario);

// Rotas para oportunidades
rotas.get('/oportunidades', listarOportunidades);
rotas.get('/oportunidades/:id', obterOportunidade);
rotas.post('/oportunidades', adicionarOportunidade);
rotas.put('/oportunidades/:id', atualizarOportunidade);
rotas.delete('/oportunidades/:id', deletarOportunidade);

//Rotas para feedbacks
rotas.get('/feedbacks', listarFeedbacks);
rotas.get('/feedbacks/:id', obterFeedback);
rotas.post('/feedbacks', adicionarFeedback);
rotas.put('/feedbacks/:id', atualizarFeedback);
rotas.delete('/feedbacks/:id', deletarFeedback);


module.exports = rotas;
