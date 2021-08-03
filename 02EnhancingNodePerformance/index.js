/*
En estos scripts se estudiaran el modo cluster y el modo Threads.
Si se ejecuta en 1 solo hilo, y se hace la prueba de acceder con 2 pestañas, se ve el efecto
del retardo de tiempo en las herramientas de desarrollador del navegaror web.

Ayuda a entender que la agrupacion de cluster es un gran beneficio dentro de su aplicacion
que generalmente tardan un poco en procesarse pero hay otras que son muy rapidas
*/
const cluster = require('cluster');

console.log(cluster.isMaster);

const express = require('express');
const app = express();

// Si el cluster esta en 'true' se ejecuta los 3 hijos, si no se ejecuta el codigo debajo
if (cluster.isMaster) {
    console.log('isMaster is : true');
    cluster.fork(); // Cluster Hijo
    // cluster.fork(); // Cluster Hijo
    // cluster.fork();  // Cluster Hijo
    // cluster.fork();  // Cluster Hijo

} else {
    console.log('isMaster is : false');

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000); // 5 segundos
        res.send('Hola desde express');
    });

    app.get('/fast', (req, res) => {
        res.send('Esto es rapido');
    });

    app.listen(3000);
}