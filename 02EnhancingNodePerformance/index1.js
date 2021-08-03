/*
Como regla general se debe hacer coincidir cada hijo (cluster.fork())
con la cantidad de nucleos fisicos que posee la maquina en donde esta corriendo.
*/

// Seteamos el grupo de subprocesos de 1
// Significa que cada hijo en el cluster solo tiene un hilo disponible
process.env.UV_THREADPOOL_SIZE = 1;

//
const cluster = require('cluster');
const crypto = require('crypto');
const express = require('express');
const app = express();

// 
if (cluster.isMaster) {
    console.log('isMaster is : true');
    cluster.fork(); // Cluster Hijo

} else {
    console.log('isMaster is : false');

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hola desde crypto');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('Esto es rapido');
    });

    app.listen(3000);
}