"use strict";

    /*
    Crea un objeto persona y verifica si tiene una propiedad llamada edad.
    Si no la tiene, agrégala con un valor predeterminado
    */

    let persona = {
        nombre: "Carlos",
        apellido: "Ruiz"
    };

    // Si no tiene la propiedad edad, la ponemos
    if(!persona.hasOwnProperty("edad")) {
        persona.edad = 25;
    }

    console.log(persona);