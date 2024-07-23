let proximoId = 1;

const feedbacks = [
    { id: 1, nome: 'Ana Silva', diaAcao: '2024-07-15', acaoRealizada: 'Plantio de árvores', comentario: 'Foi um dia muito gratificante.' },
    { id: 2, nome: 'Carlos Pereira', diaAcao: '2024-08-22', acaoRealizada: 'Distribuição de alimentos', comentario: 'Ótima organização e participação.' }
];

const obterProximoId = () => proximoId++;

module.exports = { feedbacks, obterProximoId };
