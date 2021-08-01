/*
Script que sirve para probar los hilos de nodeJS
NodeJS no es de un solo hilo en todos los casos.
Nos apoyaremos en la funcion crypto.
*/

process.env.UV_THREADPOOL_SIZE = 2; // Seteo la variable de entorno de node para 2 hilos

const crypto = require('crypto');

const start = Date.now();


// Notar que las siguientes dos funciones se ejecutan al mismo tiempo

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ', Date.now() - start); // Hora actual menos hora inicial
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ', Date.now() - start); // Hora actual menos hora inicial
});

// Ahora agregamos estas 3 funciones
// Las 4 primeras funciones demoraron lo mismo; la 5 demoro el doble
// Esto es debido a los threas en la computadora donde se esta ejecutando

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ', Date.now() - start); // Hora actual menos hora inicial
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ', Date.now() - start); // Hora actual menos hora inicial
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ', Date.now() - start); // Hora actual menos hora inicial
});