"use strict";

// Función que recibe parámetros y retorna un objeto
function crearPersona(nombre, edad, pais) {
    return {
        nombre: nombre, // Asignamos la propiedad 'nombre'
        edad: edad, // Asignamos la propiedad 'edad'
        pais: pais // Asignamos la propiedad 'pais'
    };
}

// Creamos un objeto usando la función
let persona = crearPersona("Juan", 30, "México");

// Mostramos el resultado en consola
console.log(persona); // Salida: {nombre: 'Juan', edad: 30, pais: 'México'}