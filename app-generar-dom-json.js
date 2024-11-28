"use strict"

// Definimos la clase Empleado
class Empleado {

    // Atributos privados de la clase, identificados con el prefijo #
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    // Constructor para inicializar los valores al crear una instancia de Empleado
    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre; // Asigna el nombre
        this.#apellido = apellido; // Asgina el apellido
        this.#nacimiento = nacimiento; // Asigna el año de nacimiento
        this.#sueldo = sueldo; // Asigna el sueldo
    }

    // Método para representar al empleado como una fila de tabla en formato HTML
    toString() {
        return `<tr>
                    <td>${this.#nombre}</td>
                    <td>${this.#apellido}</td>
                    <td>${this.#nacimiento}</td>
                    <td>${this.#sueldo}</td>
                </tr>`;
    }

    // Método para crear dinámicamente una fila de tabla en el DOM
    render() {

        let fila = document.createElement("tr"); // Crea una fila de tabla (<tr>)

        // Creamos las celdas (<td>) de la fila con los datos del empleado
        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");

        // Asigna el contenido de texto a cada celda
        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;

        // Añade las celdas a la fila
        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila; // Devuelve la fila completa
    }
}

// Función para renderizar la tabla inicial con los empleados precargados
function renderTable() {

    // Obtenemos la tabla por su ID
    let tabla = document.getElementById("lista-empleados")

    empleados.forEach(empleado => {
        let fila = empleado.render(); // Genera la fila para cada empleado
        tabla.appendChild(fila); // Añade la fila a la tabla
    });
}

// Función para añadir eventos al formulario
function addEventListeners() {

    // Selecciona el botón por su ID
    let boton = document.getElementById("formulario-enviar");
    boton.addEventListener('click', evento => {
        evento.preventDefault(); // Evita que el formulario recargue la página

        // Obtiene los valores de los campos del formulario
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let nacimiento = document.getElementById('nacimiento').value
        let sueldo = document.getElementById('sueldo').value
    
        // Creamos un nuevo objeto Empleado con los datos ingresados
        let empleado = new Empleado(nombre, apellido, nacimiento, sueldo)
        empleados.push(empleado); // Lo añade al arreglo global de empleados
    
        // Añade la nueva fila a la tabla en el DOM
        let tabla = document.getElementById("lista-empleados")
        let fila = empleado.render()
        tabla.appendChild(fila)
    });
}

// Función auxiliar para crear un div con una clase específica
function crearDiv(clase) {
    let fila = document.createElement('div'); // Crea un elemento div
    fila.setAttribute('class', clase); // Asigna la clase proporcionada
    return fila; // Devuelve el div creado
}

// Función para crear una fila del formulario con una etiqueta y un campo de entrada
function filaFormulario(id, titulo) {
    let fila = crearDiv('formulario-fila'); // Crea un div para la fila

    // Crea una etiqueta <label> asociada al campo de entrada
    let label = document.createElement('label');
    label.setAttribute('for', id); // Asigna el atributo "for" al ID del campo
    label.textContent = titulo; // Establece el texto de la etiqueta
    fila.appendChild(label); // Añade la etiqueta al div

    // Crea un campo de entrada <input>
    let input = document.createElement('input');
    input.setAttribute('type', 'text'); // Específica que es de tipo texto
    input.setAttribute('name', id); // Asigna el nombre
    input.setAttribute('id', id); // Asigna el ID
    fila.appendChild(input); // Añade el campo de entrada al div

    return fila; // Devuelve el div completo
}

// Función para renderizar elementos HTML dinámicamente según una descripción
function renderDOMElement(descripcionElemento) {
    let elemento = document.createElement(descripcionElemento.tag); // Crea el elemento HTML según la etiqueta

    // Asigna atributos al elemento
    let listaAtributos = descripcionElemento.attributes;
    for(let atributo in listaAtributos) {
        elemento.setAttribute(atributo, listaAtributos[atributo])
    }

    // Procesa los hijos del elemento recursivamente
    let descripcionContenido = descripcionElemento.content || [];
    for(let elementoHijo of descripcionContenido) {
        let hijo = renderDOMElement(elementoHijo); // Llama a la función para cada hijo
        elemento.appendChild(hijo); // Añade el hijo al elemento actual
    }

    // Asigna el texto del elemento si está definido
    if(descripcionElemento.textContent) {
        elemento.textContent = descripcionElemento.textContent;
    }

    return elemento; // Devuelve el elemento completo
}

// Objeto que describe la estructura del formulario
const formDescription = {
    tag: 'div',
    attributes: {
        class: "formulario-contenido",
        id: 'formulario-contenido-div',
    },
    content: [ // Contenido del formulario
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'nombre'
                    },
                    textContent: 'Nombre'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'nombre',
                        name: 'nombre'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'apellido'
                    },
                    textContent: 'Apellido'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'apellido',
                        name: 'apellido'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'nacimiento'
                    },
                    textContent: 'Año de nacimiento'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'nacimiento',
                        name: 'nacimiento'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'sueldo'
                    },
                    textContent: 'Sueldo'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'sueldo',
                        name: 'sueldo'
                    }
                }
            ]
        },
        { tag: 'div', attributes: { class: 'formulario-fila' }},
        {
            tag: 'div',
            attributes: { class: 'formulario-fila' },
            content: [
                {
                    tag: 'button',
                    attributes: { id: 'formulario-enviar' },
                    textContent: 'Añadir',
                }
            ]
        }


    ],
};

// Función para renderizar el formulario dinámicamente
function renderForm() {

    // Obtenemos el contenedor del formulario
    let form = document.getElementById('formulario');

    // Generamos el formulario dinámico
    let formularioContenido = renderDOMElement(formDescription);

    // Añade el formulario al DOM
    form.appendChild(formularioContenido);
}

// Arreglo global con empleados iniciales
let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 33000),
    new Empleado("Chindas", "Vinto", 2001, 27000),
    new Empleado("Juan", "Cruz", 1772, 38000),
    new Empleado("Misty", "Perez", 1991, 74000),
    new Empleado("Joan", "Laporta", 1987, 37000),
    new Empleado("Sabrina", "Carpenter", 2001, 20000),
    new Empleado("Eulalio", "Fernandez", 1999, 54000),
];

// Función principal para inicializar la aplicación
function main() {
    renderTable(); // Renderiza la tabla inicial
    renderForm(); // Renderiza el formulario
    addEventListeners(); // Asigna los eventos
};

// Ejecuta la función `main` cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', main);