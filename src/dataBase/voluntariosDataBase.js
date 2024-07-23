let proximoId = 1;

const voluntarios = [
    { id: 1, nome: 'Letícia Borges', email: 'leticinhabb4@gmail.com', telefone: 99991271607, acao: 'Oficinas de leitura e escrita nos bairros mais carentes' },
    { id: 2, nome: 'Pedro Henrique Veloso', email: 'henriqueveloso@gmail.com', telefone: 984650718, acao: 'Aulas de informática' },
    { id: 3, nome: 'Maria Vitoria da Silva Torres', email: 'mavitorres#gmail.com', telefone: 99991791138, acao: 'Aulas de música e dança em praça publica' },
    { id: 4, nome: 'João Pedro Sousa', email: 'mavitorres#gmail.com', telefone: 99992791530, acao: 'Evento de plantio de árvores na praça central da cidade.' }
];

const obterProximoId = () => proximoId++;

module.exports = { voluntarios, obterProximoId };