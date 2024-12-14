"use strict";

// Función que crea un objeto a partir de dos arreglos
function crearObjetoDinamico(claves, valores) {
    let objeto = {};

    for(let i = 0; i < claves.length; i++) {
        objeto[claves[i]] = valores[i];
    }
    return objeto;
}

// Creamos un objeto llamando a la función
let claves = ["nombre", "edad", "pais"];
let valores = ["Sara", 25, "Chile"];
let resultado = crearObjetoDinamico(claves, valores);

// Mostramos el objeto
console.log(resultado); // Salida: { nombre: 'Sara', edad: 25, pais: 'Chile' }