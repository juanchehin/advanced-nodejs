/*
Este script tiene el proposito de mostrar la asincronicidad de nodeJS.

El SO es el encargado de realizar la solicitud http
*/

const http = require('http');

const start = Date.now();

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

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();