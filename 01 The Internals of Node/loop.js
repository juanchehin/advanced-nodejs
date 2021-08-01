// node myFile.js

// Matrices representativas
const pendingTimers = []; // 
const pendingOSTasks = [];
const pendingOperations = [];

// Nuevos temporizadores, operaciones se registran en mi archivo en ejecucion
myFile.runContents();

function shouldContinue() {


    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Todo el cuerpo se ejecuta en un 'tick'
while (shouldContinue()) {

}


// salie de la terminal