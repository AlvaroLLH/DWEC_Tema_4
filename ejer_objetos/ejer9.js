"use strict";

    // Crea una clase Estudiante que herede de una clase Persona y agrega un método para mostrar la carrera

    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        saludar() {
            console.log(`Hola, soy ${this.nombre}.`);
        }
    }

    class Estudiante extends Persona {
        constructor(nombre, edad, carrera) {
            super(nombre, edad);
            this.carrera = carrera;
        }

        mostrarCarrera() {
            console.log(`Estoy estudiando ${this.carrera}`);
        }
    }

    let estudiante = new Estudiante("Luis", 20, "Ingeniería");
    estudiante.saludar();
    estudiante.mostrarCarrera();