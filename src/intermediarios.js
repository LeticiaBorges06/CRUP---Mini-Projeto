const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha || senha !== 'voluntario') { 
        return res.status(401).json({ mensagem: 'Senha inválida' });
    }

    next();
};

module.exports = validarSenha;