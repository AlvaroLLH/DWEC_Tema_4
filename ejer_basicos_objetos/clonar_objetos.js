"use strict";

// Creamos un objeto original
let producto = { nombre: "Laptop", precio: 1000 };

// Clonamos el objeto usando Object.assign
let productoClon = Object.assign({}, producto);

// Modificamos una propiedad del clon
productoClon.precio = 1200;

// Mostramos ambos objetos
console.log(producto); // Salida: { nombre: 'Laptop', precio: 1000 }
console.log(productoClon); // Salida: { nombre: 'Laptop', precio: 1200 }