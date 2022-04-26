// VALOR-REFERENCIA

let a = 10;
let b = a;
a = 30;

console.log({ a, b });


//En javascript todos los objetos son pasados por referencia y todos los primitivos por valor
let juan = { nombre: 'Juan' };

//El operador spread (...) separa los elementos para que apunten a espacios diferentes de memoria
let ana = {...juan };

//Esta linea cambia el valor de juan y de ana
ana.nombre = 'Ana';
console.log({ juan, ana });


const cambiarNombre = ({...persona }) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });


//Array

//de esta forma no separamos los elementos y otrasFrutas hace referencia al mismo espacio en memoria
//por lo que los cambios que realicemos se ejecutan en frutas y otrasFrutas
const frutas = ['manzana', 'pera', 'piña']
const otrasFrutas = frutas;

otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas })

//Utilizando el operador spread y especificando que es un array el objeto rompemos la relacion y no tenemos ese problema (es más eficiente)

const otrasFrutas2 = [...frutas];
otrasFrutas2.push('fresa');
otrasFrutas2.push('platano');

console.table({ otrasFrutas2 });


//También podemos utilizar .slice sin argumentos para que nos regrese un nuevo array (es menos eficiente)

const otrasFrutas3 = frutas.slice();