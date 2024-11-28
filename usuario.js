"use strict"

// OBJETOS DEFINIDOS POR EL USUARIO

// Objeto persona
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
}

// Mostramos los datos de la persona
console.log(persona)

// Factoría

// Función `crearPersona` que crea una persona
function crearPersona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

// Creamos una persona dando sus datos y los mostramos
let p1 = crearPersona("Juan", "Garcia", 33)
console.log(p1)

// Constructor de Persona
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Función saludar que saluda a la persona
    this.saludar = function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// Creamos una persona con sus datos, les mostramos y la saludamos
let p2 = new Persona("Aleida", "Perez", 37)
console.log(p2)
p2.saludar()

// Herencia

// Función `Empleado` que crea un empleado a partir de Persona
function Empleado(nombre, apellido, edad, puesto) {
    Persona.call(this, nombre, apellido, edad)
    this.puesto = puesto
}

// Función ´trabajar´ que nos muestra el trabajo del empleado
Empleado.prototype.trabajar = function() {
    console.log(`Trabajo como ${this.puesto}`)
}

// Creamos un empleado con sus datos, les mostramos, le saludamos y nos dice en qué trabaja
let e1 = new Empleado("Eufrasio", "Torquemada", 22, "Programador")
console.log(e1)
e1.saludar()
e1.trabajar()

// Agregamos el atributo `sueldo` al empleado y lo mostramos
e1.sueldo = 33000
console.log(e1)

// Borramos el atributo sueldo y mostramos el empleado sin el sueldo
delete e1.sueldo
console.log(e1)

// Llamamos a la función toString() del empleado
console.log(e1.toString());

// Función toString() del empleado que muestra el nombre y su puesto
Empleado.prototype.toString = function() {
    return `Empleado ${this.nombre} trabaja como ${this.puesto}`;
}

// Volvemos a llamar a la función toString() del empleado
console.log(e1.toString());