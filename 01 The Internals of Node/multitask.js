/*
Es script es un 'superejemplo' de todo lo visto en esta seccion
*/

// *** Codigo de /async.js ***
const http = require('http');
const start = Date.now();

const crypto = require('crypto');

const fs = require('fs'); // Para leer archivos del disco


function doRequest() {
    // Calcula el tiempo en hacer una solicitud a google
    http.request('http://www.google.com', res => {
            res.on('data', () => {});
            res.on('end', () => {
                console.log(Date.now() - start);
            });
        })
        .end();
}


// *** Codigo de threads.js ***
function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash: ', Date.now() - start); // Hora actual menos hora inicial
    });
}

doRequest();

// Leo el archivo multitask.js del disco duro de la PC
fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
});

// doHash();
// doHash();
// doHash();
// doHash();