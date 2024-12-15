"use strict";

    // Crea un objeto con anidación y realiza una copia profunda del mismo

let original = {
    nombre: "Juan",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 742
    }
};

// Copiar profundamente usando JSON
let copia = JSON.parse(JSON.stringify(original));

// Modificar la copia y comprobar que no afecta al original
copia.direccion.numero = 999;

console.log(original);
console.log(copia);