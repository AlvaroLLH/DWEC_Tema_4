"use strict";

    // Convierte un array de claves y valores en un array

    let arrays = [["color", "rojo"], ["marca", "toyota"], ["asientos", 4]];

    // Convertimos a objeto
    let coche = Object.fromEntries(arrays);

    console.log(coche);