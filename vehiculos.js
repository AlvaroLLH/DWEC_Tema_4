"use strict"

// Constructor Vehiculo
function Vehiculo(marca, matricula, potencia) {
    this.marca = marca
    this.matricula = matricula
    this.potencia = potencia
}

// Constructor Coche <- Vehiculo
function Coche(marca, matricula, potencia, tipo) {
    Vehiculo.call(this, marca, matricula, potencia)
    this.tipo = tipo

}

// Constructor Moto <- Vehiculo
function Moto(marca, matricula, potencia, cilindrada) {
    Vehiculo.call(this, marca, matricula, potencia)
    this.cilindrada = cilindrada
}

// Constructor Locomotora <- Vehiculo
class Locomotora extends Vehiculo {
    constructor(marca, matricula, potencia, color) {
        super(marca, matricula, potencia)
        this.color = color
    }
}

// Creamos una locomotora
let loc = new Locomotora("Siemens", "ABC-123", "999", "gris")