"use strict";

    // Crea un objeto y cuenta cuántas propiedades tiene

    let libro = {
        titulo: "JavaScript basico",
        autor: "Juan Perez",
        paginas: 200
    };

    // Contamos propiedades
    let totalPropiedades = Object.keys(libro).length;

    console.log(`Número de propiedades ${totalPropiedades}`);