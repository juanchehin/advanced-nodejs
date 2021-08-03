/*
En estos scripts se estudiaran el modo cluster y el modo Threads.
Si se ejecuta en 1 solo hilo, y se hace la prueba de acceder con 2 pestañas, se ve el efecto
del retardo de tiempo en las herramientas de desarrollador del navegaror web
*/
const cluster = require('cluster');

console.log(cluster.isMaster);

const express = require('express');
const app = express();

if (cluster.isMaster) {
    cluster.fork(); // pausa
} else {
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000); // 5 segundos
        res.send('Hola desde express');
    });

    app.listen(3000);
}