"use strict";

// Arreglo que guarda objetos
let palabras = ['zapatilla', 'hola', 'mundo', 'patata', 'tomate', 'zanahoria']

// Distintas formas de recorrer el arreglo con forEach
palabras.forEach( function (elem) { console.log(elem) } ); 
palabras.forEach( function (elem, indice) { console.log(indice, elem) } );
palabras.forEach( (elem, indice) => { console.log(indice, elem) } );

palabras.forEach( elem => {
    console.log(elem.toUpperCase());
});

// let palabrasEnMayusculas = palabras.map( elem => {
//     return elem.toUpperCase();
// });

// Array en el que guardaremos los objetos pasados a mayúsculas
let palabrasEnMayusculas = palabras.map(elem => elem.toUpperCase());

// Array en el que guardamos los objetos con 6 o menos caracteres
let palabrasCortas = palabras.filter(elem => {
    return (elem.length <= 6);
});

// Array que guarda los objetos al revés
let palabrasAlReves = palabras.sort((a, b) => {
    return (b.localeCompare(a));
});

// Array que almacena números
let numeros = [2, 6, 4, 88, 3, 9];

// Array que guarda los números ordenados
let numerosOrdenados = numeros.sort((a, b) => {
    return a - b;
});