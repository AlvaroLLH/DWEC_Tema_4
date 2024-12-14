"use strict";

// Creamos un objeto con propiedades
let estudiante = { nombre: "Lucía", edad: 21, curso: "Matemáticas" };

// Convertimos el objeto a JSON
let estudianteJSON = JSON.stringify(estudiante);
console.log(estudianteJSON); // Salida: {"nombre":"Lucía","edad":21,"curso":"Matemáticas"}

// Convertimos el JSON nuevamente a un objeto
let estudianteDeserializado = JSON.parse(estudianteJSON);
console.log(estudianteDeserializado); // Salida: { nombre: "Lucía", edad: 21, curso: "Matemáticas"}