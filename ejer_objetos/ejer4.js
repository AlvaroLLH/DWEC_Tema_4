"use strict";

    // Combina dos objetos en uno solo utilizando el método Object.assign()

    let obj1 = { a: 1, b: 2};
    let obj2 = { c: 3, d: 4};

    let combinado = Object.assign({}, obj1, obj2);

    console.log(combinado);