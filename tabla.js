"use strict";

// Nombre, Apellidos, Año nacimiento, Sueldo

// Arreglo que contiene empleados
let empleados = [
    {
        nombre: "Pepe",
        apellidos: "Garcia",
        nacimiento: 1999,
        sueldo: 30000
    },
    {nombre: "Sandra", apellidos: "Lopez", nacimiento: 1989, sueldo: 55000},
    {nombre: "Bilbo", apellidos: "Targaryen", nacimiento: 1200, sueldo: 80000},
    {nombre: "Danaerys", apellidos: "Bolson", nacimiento: 2432, sueldo: 88888},
];

// Filtramos por sueldo > 60000
let empleadosSueldoAlto = empleados.filter(empleado => {
    return (empleado.sueldo > 60000);
});

// Ordenamos los empleados
let empleadosPorOrdenDeNacimiento = empleados.sort((a, b) => {
    return a.nacimiento - b.nacimiento;
});

