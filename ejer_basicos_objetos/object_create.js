"use strict";

// Objeto base
let personaBase = {
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

// Creamos un nuevo objeto que hereda de personaBase
let empleado = Object.create(personaBase);

// Agregamos propiedades específicas al objeto hijo
empleado.nombre = "Ana";
empleado.puesto = "Diseñadora";

// Llamamos al método heredado
empleado.saludar(); // Salida: Hola, soy Ana