const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Pegando todos os usuários');
});

router.post('/', (req, res) => {
    res.send('Criando um novo usuário');
});

module.exports = router;