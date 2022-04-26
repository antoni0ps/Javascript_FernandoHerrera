/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes)
 * 2H = Two of hearts (Corazones)
 * 2C = Two of spades (Picas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S']; //Array de tipos (corazones, diamantes, treboles, picas)
const especiales = ['A', 'J', 'Q', 'K']; //array de especiales (Rey reina jota y AS)

let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS DEL HTML
const btnPedir = document.querySelector('#btnPedir');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');


//Esta funcion crea una nueva baraja aleatoria
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) { //recorremos del 2 al 10
        for (let tipo of tipos) { //por cada elemento número recorrido también se recorren los 4 tipos
            deck.push(i + tipo) //se agrega al array deck un elemento del 2 al 10 por cada tipo (2C, 2D, 2H, 2S, 3C, 3D...)
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo) //se agrega un elemento por cada tipo y especial
        }
    }

    deck = _.shuffle(deck) // Se mezclan los elementos de la baraja
    console.log(deck);

    return deck; //devolvemos baraja

};


crearDeck(); //llamada al método para crear la baraja


//Esta funcion me permite pedir una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en la baraja'
    }
    const carta = deck.pop(); //devuelve el ultimo elemento del array y lo elimina

    return carta;
};

//pedirCarta();


//esta función devuelve el valor numérico de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    //2 = 2, 10 = 10, 3 = 3

    // let puntos = 0;

    // //isNaN evalua a true si el valor NO es un número 
    // if (isNaN(valor)) {

    //     puntos = (valor === 'A') ? 11 : 10;

    // } else {
    //     puntos = valor * 1; //convertimos el valor a un numero
    // }

    // console.log(puntos)


    //primero evalua si valor no es número, despues vuelve a evaluar si el valor es A, por último ejecuta para cuando es un número
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;

}

const valor = valorCarta(pedirCarta());



//EVENTOS
btnPedir.addEventListener('click', () => { //Una función que se manda como argumento es un CALLBACK

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta)
    puntosHTML[0].innerText = puntosJugador;


    //<img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img'); //creamos elemento img en memoria
    imgCarta.src = `assets/cartas/${carta}.png`; //especificamos la ruta del elemento
    imgCarta.className = 'carta'; //especificamos la clase del elemento
    divCartasJugador.append(imgCarta); //agregamos elemento al div cartas jugador




})