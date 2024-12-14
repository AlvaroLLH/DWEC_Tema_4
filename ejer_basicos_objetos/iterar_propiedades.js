"use strict";

// Creamos un objeto con información de un libro
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    ano: 1967,
    genero: "Novela"
};

// Iteramos sobre las propiedades usando un ciclo for-in
for(let key in libro) {
    console.log(`${key}: ${libro[key]}`);
}

/*
Salida:
titulo: Cien años de soledad
autor: Gabriel García Márquez
ano: 1967
genero: Novela
*/