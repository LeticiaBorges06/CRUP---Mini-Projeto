const { oportunidades, obterProximoIdOportunidade } = require('../dataBase/oportunidadeDeAcao');

const listarOportunidades = (req, res) => {
    res.status(200).json(oportunidades);
};

const obterOportunidade = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const oportunidade = oportunidades.find(op => op.id === Number(id));

    if (!oportunidade) {
        return res.status(404).json({ mensagem: 'Oportunidade não encontrada' });
    }

    return res.status(200).json(oportunidade);
};

const adicionarOportunidade = (req, res) => {
    const { titulo, descricao, data, local } = req.body;

    if (!titulo || !descricao || !data || !local) {
        return res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    if (titulo.trim() === '' || descricao.trim() === '' || local.trim() === '') {
        return res.status(400).json({ mensagem: 'Algum campo está vazio' });
    }

    const novaOportunidade = {
        id: obterProximoIdOportunidade(),
        titulo,
        descricao,
        data,
        local
    };

    oportunidades.push(novaOportunidade);
    return res.status(201).json(novaOportunidade);
};

const atualizarOportunidade = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, data, local } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const oportunidade = oportunidades.find(op => op.id === Number(id));

    if (!oportunidade) {
        return res.status(404).json({ mensagem: 'Oportunidade não encontrada' });
    }

    if (!titulo || !descricao || !data || !local) {
        return res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    oportunidade.titulo = titulo;
    oportunidade.descricao = descricao;
    oportunidade.data = data;
    oportunidade.local = local;

    return res.status(200).json(oportunidade);
};

const deletarOportunidade = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const indice = oportunidades.findIndex(op => op.id === Number(id));

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Oportunidade não encontrada' });
    }

    const [oportunidadeRemovida] = oportunidades.splice(indice, 1);

    return res.status(200).json(oportunidadeRemovida);
};

module.exports = {
    listarOportunidades,
    obterOportunidade,
    adicionarOportunidade,
    atualizarOportunidade,
    deletarOportunidade
};