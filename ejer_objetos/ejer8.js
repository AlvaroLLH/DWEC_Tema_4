"use strict";

    // Crea una clase Auto con propiedades de marca y modelo, y un método arrancar que imprima un mensaje

    class Auto {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }

        arrancar() {
            console.log(`El auto ${this.marca} ${this.modelo} está arrancando.`);
        }
    }

    let miAuto = new Auto("Toyota", "Corolla");
    miAuto.arrancar();