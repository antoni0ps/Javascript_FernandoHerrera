

const arr = new Array(10);   //esta no es la manera común de crear un array

const arrr = [];  //forma correcta o más común de declarar arrays

let videojuegos = ['Mario 3','Megaman', 'Crash Bandicoot'];
console.log({videojuegos});

console.log(videojuegos[0]);

let arregloCosas = [   //podemos almacenar distintos tipos dentro del mismo array
    true,
    123,
    'Antonio',
    1+2,
    ['X', 'Megaman', 'Zero', 'Doctor Light'],  //array dentro de un array
];

console.log({arregloCosas});

console.log(arregloCosas[4][3]);  //posición 3 del array megaman dentro de la posición 4 de arregloCosas


let arregloMegaman = arregloCosas[4];   //Mismo que arriba pero creando variable arreglomegaman
console.log(arregloMegaman[3]);



