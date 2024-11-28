"use strict"

// Clases

// Clase persona
class Persona {

    // Atributos privados
    #nombre;
    #apellido;
    #edad;

    // Constructor de Persona
    constructor(nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    // Función `saludar` que saluda a la persona
    saludar() {
        console.log("Hola, soy " + this.#nombre);
    }
}

// Creamos una persona, mostramos sus datos y la saludamos
let p1 = new Persona("Angustias", "Malas", 27);
console.log(p1);
p1.saludar();

// Clase Empleado que extiende de Persona
class Empleado extends Persona {

    // Atributo privado
    #puesto;

    // Constructor de Empleado
    constructor(nombre, apellido, edad, puesto) {
        super(nombre, apellido, edad)
        this.#puesto = puesto
    }

    // Getter y setter para el puesto (1º opción)
    get puesto() { return this.#puesto }
    set puesto(puesto) { this.#puesto = puesto }

    // Getter y setter para el puesto (2º opción)
    getPuesto() { return this.#puesto; }
    setPuesto(puesto) { this.#puesto = puesto; }

    // Función `trabajar` que muestra el trabajo del empleado
    trabajar() {
        console.log(`Estoy trabajando de ${this.#puesto}`);
    }
}

// Creamos un empleado, mostramos sus datos, le saludamos y nos dice en qué trabaja
let e1 = new Empleado("Arturo", "Tarari", 44, "Mirador de Nubes");
console.log(e1);
e1.saludar();
e1.trabajar();