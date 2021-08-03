/*
Con este archivo se llevara a cabo un analisis con 'PM2 monitor'
*/

//
const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hola desde crypto');
    });
});

app.get('/fast', (req, res) => {
    res.send('Esto es rapido');
});

app.listen(3000);