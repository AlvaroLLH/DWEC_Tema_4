"use strict";

// Clase base Animal
class Animal {
    constructor(especie) {
        this.especie = especie; // Propiedad 'especie'
    }

    // Método para emitir un sonido genérico
    hacerSonido() {
        console.log("Sonido genérico de animal");
    }
}

// Clase Perro que extiende de Animal
class Perro extends Animal {
    constructor(nombre) {
        super("Perro"); // Llamamos al constructor de la clase padre
        this.nombre = nombre; // Propiedad 'nombre'
    }

    // Sobrescribimos el método hacerSonido
    hacerSonido() {
        console.log("Guau guau");
    }
}

// Creamos una instancia de Perro
let miPerro = new Perro("Max");

// Llamamos al método hacerSonido
miPerro.hacerSonido(); // Salida: Guau guau