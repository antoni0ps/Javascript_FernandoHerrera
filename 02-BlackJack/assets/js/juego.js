/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes)
 * 2H = Two of hearts (Corazones)
 * 2C = Two of spades (Picas)
 */

let deck = [];
const tipos = ["C", "D", "H", "S"]; //Array de tipos (corazones, diamantes, treboles, picas)
const especiales = ["A", "J", "Q", "K"]; //array de especiales (Rey reina jota y AS)

let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS DEL HTML
const btnPedir = document.querySelector("#btnPedir");
const btnPlantarse = document.querySelector("#btnPlantarse");
const btnNuevo = document.querySelector("#btnNuevo");

const puntosHTML = document.querySelectorAll("small");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

//Esta funcion crea una nueva baraja aleatoria
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        //recorremos del 2 al 10
        for (let tipo of tipos) {
            //por cada elemento número recorrido también se recorren los 4 tipos
            deck.push(i + tipo); //se agrega al array deck un elemento del 2 al 10 por cada tipo (2C, 2D, 2H, 2S, 3C, 3D...)
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo); //se agrega un elemento por cada tipo y especial
        }
    }

    deck = _.shuffle(deck); // Se mezclan los elementos de la baraja
    console.log(deck);

    return deck; //devolvemos baraja
};

crearDeck(); //llamada al método para crear la baraja

//Esta funcion me permite pedir una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay cartas en la baraja";
    }
    const carta = deck.pop(); //devuelve el ultimo elemento del array y lo elimina
    console.log(carta);

    return carta;
};

//pedirCarta();

//esta función devuelve el valor numérico de la carta
const valorCarta = (carta) => {
    const valor = String(carta).substring(0, carta.length - 1);

    // let puntos = 0;

    // //isNaN evalua a true si el valor NO es un número
    // if (isNaN(valor)) {

    //     puntos = (valor === 'A') ? 11 : 10;

    // } else {
    //     puntos = valor * 1; //convertimos el valor a un numero
    // }

    //primero evalua si valor no es número, despues vuelve a evaluar si el valor es A, por último ejecuta para cuando es un número
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; //devuelve el valor de la carta como entero
};




//TURNO DE LA COMPUTADORA
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        if (
            puntosComputadora > 10 &&
            carta.substring(0, carta.length - 1) === "A"
        ) {
            //si sale un as y el jugador tiene más de 10 puntos, el As vale 1
            puntosComputadora = puntosComputadora + (valorCarta(carta) - 10);
            puntosHTML[1].innerText = puntosComputadora;
        } else {
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;
        }

        //<img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement("img"); //creamos elemento img en memoria
        imgCarta.src = `assets/cartas/${carta}.png`; //especificamos la ruta del elemento
        imgCarta.className = "carta"; //especificamos la clase del elemento
        divCartasComputadora.append(imgCarta); //agregamos elemento al div cartas jugador

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && puntosMinimos <= 21);
    mostrarMensaje(puntosMinimos);
};

//MENSAJE AL USUARIO
const mostrarMensaje = (puntosMinimos) => {

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Empate');
        } else if (puntosComputadora > 21) {
            alert('Ganaste')
        } else if (puntosMinimos > 21) {
            alert('Perdiste')
        } else {
            alert('Perdiste')
        }
    }, 100);
};


//EVENTOS
//Una función que se manda como argumento es un CALLBACK
btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    if (puntosJugador > 10 && carta.substring(0, carta.length - 1) === "A") {
        //si sale un as y el jugador tiene más de 10 puntos, el As vale 1
        puntosJugador = puntosJugador + (valorCarta(carta) - 10);
        puntosHTML[0].innerText = puntosJugador;
    } else {
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;
    }

    //<img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement("img"); //creamos elemento img en memoria
    imgCarta.src = `assets/cartas/${carta}.png`; //especificamos la ruta del elemento
    imgCarta.className = "carta"; //especificamos la clase del elemento
    divCartasJugador.append(imgCarta); //agregamos elemento al div cartas jugador

    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnPlantarse.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn("21, ¡Genial, Ganaste!");
        btnPedir.disabled = true;
        btnPlantarse.disabled = true;
        turnoComputadora(puntosJugador);
    }
});


btnPlantarse.addEventListener("click", () => {
    turnoComputadora(puntosJugador);
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
})

btnNuevo.addEventListener("click", () => {

    console.clear;
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    btnPedir.disabled = false;
    btnPlantarse.disabled = false;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
})