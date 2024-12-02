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

            // Si la celda est
        }
    }
}