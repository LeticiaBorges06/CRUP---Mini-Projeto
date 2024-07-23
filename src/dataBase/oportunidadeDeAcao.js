let proximoId = 1; 
const oportunidades = [
    { id: 1, titulo: 'Limpeza de Praia', descricao: 'Evento de limpeza e preservação das praias locais.', data: '2024-08-15', local: 'Praia do Forte' },
    { id: 2, titulo: 'Coleta de Alimentos', descricao: 'Campanha de arrecadação de alimentos para famílias carentes.', data: '2024-09-10', local: 'Centro Comunitário' },
    { id: 3, titulo: 'Pintura de Escola', descricao: 'Atividade de pintura e reforma da escola municipal.', data: '2024-10-05', local: 'Escola Municipal da Vila' },
    { id: 4, titulo: 'Caminhada Solidária', descricao: 'Caminhada para arrecadação de fundos para tratamento de doenças raras.', data: '2024-11-20', local: 'Parque Central' }
];

const obterProximoId = () => proximoId++; 

module.exports = { oportunidades, obterProximoId };
