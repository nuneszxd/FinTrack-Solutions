const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../database');

router.get('/', (req, res) => {
    res.send('Pegando todos os usuários');
});

router.post('/register', (req, res) => {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({
            message: "Dados Invalidos"
        });
    }

    const users = db.prepare(`
        SELECT *
        FROM users
        WHERE email = ?
        `).get(email);

    if (users) {
        return res.status(409).json({
            message: "Usuario já cadastrado."
        });
    }
    
    db.prepare(`
        INSERT INTO users (email, password)
        VALUE (?,?)
            `).run(email, password);
    


    return res.status(201).json({
        message: "Usuario cadastrado com sucesso."
    });
});

module.exports = router;