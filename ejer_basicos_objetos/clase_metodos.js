"use strict";

// Creamos la clase cuentaBancaria
class cuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular; // Propiedad 'titular'
        this.saldo = saldo; // Propiedad 'saldo'
    }

    // Método para depositar dinero
    depositar(cantidad) {
        this.saldo += cantidad;
        console.log(`Has depositado ${cantidad}. Nuevo saldo: ${this.saldo}`);
    }

    // Método para retirar dinero
    retirar(cantidad) {
        if(cantidad > this.saldo) {
            console.log("Fondos insuficientes");

        } else {
            this.saldo -= cantidad;
            console.log(`Has retirado ${cantidad}. Nuevo saldo ${this.saldo}`);
        }
    }
}

// Creamos una instancia de cuentaBancaria
let cuenta = new cuentaBancaria("Luis", 500);

// Realizamos un ingreso y una retirada
cuenta.depositar(200); // Salida: Has depositado 200. Nuevo saldo: 700
cuenta.retirar(100); // Salida: Has retirado 100. Nuevo saldo: 600