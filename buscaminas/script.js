"use strict";

// Variables globales que guardan el estado del juego
let tablero = []; // El tablero es una matriz dimensional
let numFilas, numColumnas, numMinas; // Variables para almacenar filas, columnas y minas
let finJuego = false; // Variable para saber si el juego ha terminado

// Función para inicializar el tablero
function initializeBoard(filas, columnas, minas) {
    
    tablero = []; // Inicializamos el tablero vacío
    numFilas = filas;
    numColumnas = columnas;
    numMinas = minas;
    finJuego = false;

    // Creamos un tablero vacío con objetos para cada celda
    for(let i = 0; i < filas; i++) {
        tablero[i] = [];
        
        for(let j = 0; j < columnas; j++) {
            tablero[i][j] = {
                esMina: false, // Si la celda tiene una mina
                revelada: false, // Si la celda ha sido revelada
                marcada: false, // Si la celda está marcada como mina
                adyacentesMinas: 0 // Número de minas adyacentes
            };
        }
    }

    // Colocar minas aleatoriamente en el tablero
    let minasColocadas = 0;

    while(minasColocadas < minas) {
        const fila = Math.floor(Math.random() * filas); // Seleccionar fila aleatoria
        const columna = Math.floor(Math.random() * columnas); // Seleccionar columna aleatoria

        // Si la celda no tiene mina, colocamos una
        if(!tablero[fila][columna].esMina) {
            tablero[fila][columna].esMina = true;
            minasColocadas++;
        }
    }

    // Calculamos los números de minas adyacentes para cada celda
    for(let i = 0; i < filas; i++) {
        for(let j = 0; j < columnas; j++) {
            if(!tablero[i][j].esMina) { // Solo si la celda no es mina
                let adyacentesMinas = 0;

                // Comprobamos las celdas adyacentes (8 direcciones)
                for(let x = -1; x <= 1; x++) {
                    for(let y = -1; y <= 1; y++) {
                        const r = i + x;
                        const c = j + y;

                        // Si la celda está dentro del tablero y tiene una mina, sumamos
                        if(r >= 0 && r < filas && c >= 0 && c < columnas && tablero[r][c].esMina) {
                            adyacentesMinas++;
                        }
                    }
                }
                tablero[i][j].adyacentesMinas = adyacentesMinas;
            }
        }
    }

    // Renderizamos el tablero en el DOM
    renderTablero();
}

// Función para renderizar el tablero en la pantalla
function renderTablero() {
    const tableroElement = document.getElementById('board');
    tableroElement.innerHTML = ''; // Limpiamos el tablero antes de renderizar
    tableroElement.style.gridTemplateColumns = `repeat(${numColumnas}, 30px)`; // Establecemos las columnas del grid

    // Creamos las celdas del tablero
    for(let i = 0; i < numFilas; i++) {
        for(let j = 0; j < numColumnas; j++) {
            const celda = document.createElement('div'); // Creamos un div para la celda
            celda.classList.add('cell');
            celda.dataset.fila = i; // Guardamos las coordenadas de la celda
            celda.dataset.columna = j;

            // Si la celda está marcada, agregamos la clase 'marcada'
            if(tablero[i][j].marcada) {
                celda.classList.add('marcada');
            }

            // Si la celda está revelada, mostramos el contenido
            if(tablero[i][j].revelada) {
                celda.classList.add('revelada');

                if(tablero[i][j].esMina) {
                    celda.innerHTML = '💣'; // Si tiene mina, mostramos una bomba

                } else if (tablero[i][j].adyacentesMinas > 0) {
                    celda.innerHTML = tablero[i][j].adyacentesMinas; // Mostramos número de minas adyacentes
                }
            }

            // Añadimos los manejadores de eventos
            celda.addEventListener('click', clickEnCelda); // Click izquierdo (descubrir)
            celda.addEventListener('contextmenu', clickDerechoEnCelda); // Click derecho (marcar, desmarcar)
            tableroElement.appendChild(celda); // Añadimos la celda al tablero
        }
    }
}

// Función para manejar el click izquierdo en una celda
function clickEnCelda(event) {
    
    if(finJuego) return; // Si el juego ha terminado, no hacer nada

    // Declaración de constantes
    const fila = event.target.dataset.row;
    const columna = event.target.dataset.col;
    const celda = tablero[fila][columna];

    if(celda.revelada || celda.marcada) return; // No hacer nada si la celda ya está revelada o marcada
    celda.revelada = true; // Revelamos la celda

    if(celda.esMina) {
        alert("¡Perdiste! Hiciste clic en una mina.");
        finJuego = true; // Fin del juego
        revelarCeldas(); // Revelamos todas las celdas

    } else {

        if(celda.adyacentesMinas === 0) {

            // Si no hay minas adyacentes, revelamos las celdas cercanas
            revelarCeldasAdyacentes(fila,columna);
        }
    }
    renderTablero(); // Volver a renderizar el tablero
}

// Función para manejar el click derecho en una celda (marcar/desmarcar)
function clickDerechoEnCelda(event) {
    
    event.preventDefault(); // Prevenir el menú contextual del navegador

    if(finJuego) return; // Si el juego ha terminado, no hacer nada

    // Declaración de constantes
    const fila = event.target.dataset.row;
    const columna = event.target.dataset.col;
    const celda = tablero[fila][columna];

    if(!celda.revelada) { // Solo permitimos marcar si la celda no está revelada
        celda.marcada = !celda.marcada; // Alternamos el estado de marcado
        renderTablero(); // Volvemos a renderizar el tablero
    }
}

// Función para revelar las celdas adyacentes si están vacías
function revelarCeldasAdyacentes(fila, columna) {

    for(let x = -1; x <= 1; x++) {
        for(let y = -1; y <= 1; y++) {
            const r = parseInt(fila) + x;
            const c = parseInt(columna) + y;

            if(r >= 0 && r < numFilas && c >= 0 && c < numColumnas) {
                const celdaAdyacente = tablero[r][c];

                if(!celdaAdyacente.revelada && !celdaAdyacente.esMina) {
                    celdaAdyacente.revelada = true;

                    if(celdaAdyacente.adyacentesMinas === 0) {
                        revelarCeldasAdyacentes(r, c); // Recursión para celdas vacías
                    }
                }
            }
        }
    }
}

// Función para revelar todas las celdas al final del juego (cuando se pierde)
function revelarCeldas() {
    
    for(let i = 0; i < numFilas; i++) {
        for(let j = 0; j < numColumnas; j++) {
            tablero[i][j].revelada = true; // Revelamos todas las celdas
        }
    }
    renderTablero(); // Renderizamos el tablero con todas las celdas reveladas
}

// Función para iniciar el juego cuando el usuario hace click en el botón
document.getElementById('startBtn').addEventListener('click', () => {

    // Declaración de constantes
    const fila = parseInt(document.getElementById('filas').value); // Filas elegidas
});