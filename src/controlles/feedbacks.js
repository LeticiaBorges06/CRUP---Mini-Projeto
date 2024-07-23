const { feedbacks, obterProximoId } = require('../dataBase/feedbacksDataBase.js');

// Listar todos os feedbacks
const listarFeedbacks = (req, res) => {
    res.status(200).json(feedbacks);
};

// Obter um feedback específico pelo ID
const obterFeedback = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const feedback = feedbacks.find(fb => fb.id === Number(id));

    if (!feedback) {
        return res.status(404).json({ mensagem: 'Feedback não encontrado' });
    }

    return res.status(200).json(feedback);
};

// Adicionar um novo feedback
const adicionarFeedback = (req, res) => {
    const { nome, diaAcao, acaoRealizada, comentario } = req.body;

    if (!nome || !diaAcao || !acaoRealizada || !comentario) {
        return res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    if (nome.trim() === '' || acaoRealizada.trim() === '' || comentario.trim() === '') {
        return res.status(400).json({ mensagem: 'Algum campo está vazio' });
    }

    const novoFeedback = {
        id: obterProximoId(),
        nome,
        diaAcao,
        acaoRealizada,
        comentario
    };

    feedbacks.push(novoFeedback);
    return res.status(201).json(novoFeedback);
};

// Atualizar um feedback existente
const atualizarFeedback = (req, res) => {
    const { id } = req.params;
    const { nome, diaAcao, acaoRealizada, comentario } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const feedback = feedbacks.find(fb => fb.id === Number(id));

    if (!feedback) {
        return res.status(404).json({ mensagem: 'Feedback não encontrado' });
    }

    if (!nome || !diaAcao || !acaoRealizada || !comentario) {
        return res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    feedback.nome = nome;
    feedback.diaAcao = diaAcao;
    feedback.acaoRealizada = acaoRealizada;
    feedback.comentario = comentario;

    return res.status(200).json(feedback);
};

// Deletar um feedback existente
const deletarFeedback = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido" });
    }

    const indice = feedbacks.findIndex(fb => fb.id === Number(id));

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Feedback não encontrado' });
    }

    const [feedbackRemovido] = feedbacks.splice(indice, 1);

    return res.status(200).json(feedbackRemovido);
};

module.exports = {
    listarFeedbacks,
    obterFeedback,
    adicionarFeedback,
    atualizarFeedback,
    deletarFeedback
};
