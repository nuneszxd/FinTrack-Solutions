const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
