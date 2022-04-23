// PROPIEDADES Y MÉTODOS BÁSICOS DE LOS ARRAYS

let juegos = ['Zelda', 'Mario', 'Metroid', 'Kirby'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});


let nuevaLongitud = juegos.push('F-Zero');  //push para añadir elemento al final del array
console.log({nuevaLongitud}, {juegos});

nuevaLongitud = juegos.unshift('Star Fox');  //unshift para añadir elemento al principio del array
console.log({nuevaLongitud}, {juegos});


let juegoBorrado = juegos.pop()   // pop para borrar el ultimo elemento del array
console.log({juegoBorrado, juegos});


let pos = 3;  //posicion 3, Metroid
juegos.splice(pos, 1)   //splice para borrar elementos a partir de una posicion inicial, en este caso se borra un elemento a partir de la posicion 3

console.log(juegos);

let metroidIndex = juegos.indexOf('Zelda')
console.log({metroidIndex});

