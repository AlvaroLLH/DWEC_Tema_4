"use strict";

// Creamos un objeto con datos de usuario
let usuario = { nombre: "Carlos", email: "carlos@gmail.com", activo: true};

// Función para verificar si una propiedad existe
function verificarPropiedad(obj, propiedad) {
    if(obj.hasOwnProperty(propiedad)) {
        console.log(`El objeto tiene la propiedad ${propiedad}`);

    } else {
        console.log(`El objeto NO tiene la propiedad ${propiedad}`);
    }
}

// Verificamos propiedades
verificarPropiedad(usuario, "email"); // Salida: El objeto tiene la propiedad "email"
verificarPropiedad(usuario, "telefono"); // Salida: El objeto NO tiene la propiedad "telefono"