"use strict";

    // Iterar sobre un objeto y muestra sus claves y valores usando Object.entries()

    let usuario = {
        nombre: "Sofia",
        edad: 22,
        profesion: "Ingenieria"
    };

    // Iterar con Object.entries()
    Object.entries(usuario).forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
    });