"use strict";

// Función constructora para crear un Vehículo
function Vehiculo(marca, modelo, ano){
    this.marca = marca; // Asignamos la propiedad 'marca'
    this.modelo = modelo; // Asignamos la propiedad 'modelo'
    this.ano = ano; // Asignamos la propiedad 'ano'
}

// Agregamos un método toString al prototipo de Vehiculo para mostrar su info
Vehiculo.prototype.toString = function() {
    console.log(`Vehículo: ${this.marca} ${this.modelo} ${this.ano}`);
};

// Creamos una instancia de Vehiculo
let miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);

// Llamamos al método toString
miVehiculo.toString(); // Salida: Vehículo: Toyota Corolla 2020