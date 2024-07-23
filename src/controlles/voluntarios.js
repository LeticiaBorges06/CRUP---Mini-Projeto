const { voluntarios, obterProximoId } = require('../dataBase/voluntariosDataBase.js');

const listaVoluntarios = (req, res) => {
    res.status(200).json(voluntarios);
};

const obterVoluntario = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const voluntario = voluntarios.find(vol => vol.id === Number(id));

    if (!voluntario) {
        return res.status(404).json({ mensagem: 'Voluntário não encontrado' });
    }

    return res.status(200).json(voluntario);
};

const adicionarVoluntario = (req, res) => {
    const { nome, email, telefone, acao } = req.body;

    if (!nome || !email || !telefone || !acao) {
        return res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    if (nome.trim() === '' || email.trim() === '' || acao.trim() === '') {
        return res.status(400).json({ mensagem: 'Algum campo está vazio' });
    }

    const voluntarioNovo = {
        id: obterProximoId(),
        nome,
        email,
        telefone,
        acao
    };

    voluntarios.push(voluntarioNovo);
    return res.status(201).json(voluntarioNovo);
};

const deletarVoluntario = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const indice = voluntarios.findIndex(vol => vol.id === Number(id));

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Voluntário não encontrado' });
    }

    const [voluntarioRemovido] = voluntarios.splice(indice, 1);

    return res.status(200).json(voluntarioRemovido);
};

module.exports = {
    listaVoluntarios,
    obterVoluntario,
    adicionarVoluntario,
    deletarVoluntario
};
