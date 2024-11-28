"use strict"

// Definición de la clase Empleado
class Empleado {

    // Declaramos los atributos privados
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    // Constructor para inicializar un nuevo objeto Empleado con sus datos
    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre; // Asigna el nombre al atributo privado
        this.#apellido = apellido; // Asigna el apellido al atributo privado
        this.#nacimiento = nacimiento; // Asigna el año de nacimiento al atributo privado
        this.#sueldo = sueldo; // Asigna el sueldo al atributo privado
    }

    // Método que convierte los datos del empleado en una fila de tabla en formato HTML
    toString() {
        return `<tr>
                    <td>${this.#nombre}</td>
                    <td>${this.#apellido}</td>
                    <td>${this.#nacimiento}</td>
                    <td>${this.#sueldo}</td>
                </tr>`;
    }

    // Método para generar dinámicamente una fila de tabla en el DOM
    render() {

        let fila = document.createElement("tr"); // Crea un elemento de fila (<tr>)

        // Crea celdas (<td>) para cada dato del empleado
        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");

        // Rellenamos las celdas con los valores correspondientes
        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;

        // Añade las celdas a la fila
        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila; // Devuelve la fila creada
    }
}

// Función para renderizar la tabla de empleados en el DOM
function renderTable() {
    let tabla = document.getElementById("lista-empleados"); // Obtenemos la tabla por su ID
    empleados.forEach(empleado => {
        let fila = empleado.render(); // Generamos la fila para cada empleado
        tabla.appendChild(fila); // Añade la fila a la tabla
    });
}

// Función para añadir eventos a los elementos del formulario
function addEventListeners() {

    let boton = document.getElementById("formulario-enviar"); // Selecciona el botón del formulario

    boton.addEventListener('click', evento => {
        evento.preventDefault(); // Previene que el formulario recargue la página
    
        // Obtenemos los valores de los campos de entrada del formulario
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let nacimiento = document.getElementById('nacimiento').value
        let sueldo = document.getElementById('sueldo').value
    
        // Crea un nuevo empleado con los valores obtenidos
        let empleado = new Empleado(nombre, apellido, nacimiento, sueldo)
        empleados.push(empleado); // Añade el empleado al arreglo global
    
        // Añade la nueva fila correspondiente al empleado en la tabla
        let tabla = document.getElementById("lista-empleados")
        let fila = empleado.render()
        tabla.appendChild(fila)
    });
}

// Función para crear un div con una clase específica
function crearDiv(clase) {
    let fila = document.createElement('div'); // Crea un elemento <div>
    fila.setAttribute('class', clase); // Asigna la clase proporcionada
    return fila; // Devuelve el div creado
}

// Función para crear una fila del formulario con una etiqueta (<label>) y un campo de entrada (<input>)
function filaFormulario(id, titulo) {
    let fila = crearDiv('formulario-fila'); // Crea un div para la fila del formulario

    // Crea un etiqueta <label> asociada al campo de entrada
    let label = document.createElement('label');
    label.setAttribute('for', id); // Asigna el atributo "for" al ID del campo
    label.textContent = titulo; // Establece el texto de la etiqueta
    fila.appendChild(label); // Añade la etiqueta al div

    // Crea el campo de entrada <input>
    let input = document.createElement('input');
    input.setAttribute('type', 'text'); // Define que es un campo de texto
    input.setAttribute('name', id); // Asigna el nombre
    input.setAttribute('id', id); // Asigna el ID
    fila.appendChild(input); // Añade el campo al div

    return fila; // Devuelve la fila completa
}

// Función para renderizar el formulario en el DOM
function renderForm() {

    // Obtenenemos el formulario por su ID
    let form = document.getElementById('formulario');

    // Crea un contenedor para el formulario
    let formularioContenido = crearDiv('formulario-contenido');

    // Añade filas al formulario para cada campo de entrada
    formularioContenido.appendChild(filaFormulario('nombre', 'Nombre'));
    formularioContenido.appendChild(filaFormulario('apellido', 'Apellido'));
    formularioContenido.appendChild(filaFormulario('nacimiento', 'Año de nacimiento'));
    formularioContenido.appendChild(filaFormulario('sueldo', 'Sueldo'));
    
    // Añadimos un espacio vacío al formulario
    formularioContenido.appendChild(crearDiv('formulario-fila'));

    // Crea un botón "Añadir" y lo añade al formulario
    let divBoton = crearDiv('formulario-fila');

    let boton = document.createElement('button');
    boton.setAttribute('id', 'formulario-enviar');
    boton.textContent = 'Añadir';
    divBoton.appendChild(boton);

    formularioContenido.appendChild(divBoton);

    form.appendChild(formularioContenido); // Añade el formulario completo al DOM
}

// Arreglo global con empleados precargados
let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 33000),
    new Empleado("Chindas", "Vinto", 2001, 27000),
    new Empleado("Juan", "Cruz", 1772, 38000),
    new Empleado("Misty", "Perez", 1991, 74000),
    new Empleado("Joan", "Laporta", 1987, 37000),
    new Empleado("Sabrina", "Carpenter", 2001, 20000),
    new Empleado("Eulalio", "Fernandez", 1999, 54000),
]

// Función principal que inicializa la aplicación
function main() {
    renderTable(); // Renderiza la tabla con los empleados iniciales
    renderForm(); // Renderiza el formulario
    addEventListeners(); // Añade los eventos al formulario
};

// Ejecutamos la función `main` cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', main);