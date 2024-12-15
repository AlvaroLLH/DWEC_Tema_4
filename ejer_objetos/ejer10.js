"use strict";

    // Crea un objeto y evita que se le puedan agregar, modificar o eliminar propiedades utilizando Object.freeze()

    let config = {
        tema: "oscuro",
        idioma: "español"
    };

    // Bloqueamos cambios
    Object.freeze(config);

    // Intentamos modificar
    config.tema = "claro";
    config.nuevaPropiedad = "valor";

    console.log(config);