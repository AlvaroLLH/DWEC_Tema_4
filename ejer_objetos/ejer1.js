"use strict";

    /*
    Crea un objeto calculadora con dos propiedades: a y b. Luego, agrega dinámicamente un método sumar que retorne
    la suma de a y b
    */

    let calculadora = {
        a: 10,
        b: 6 
    };

    calculadora.sumar = function () {
        return this.a + this.b;
    }

    console.log("Resultado de sumar: ", calculadora.sumar()); // 16