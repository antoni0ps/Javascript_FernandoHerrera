import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe as buscarHeroe } from './js/promesas'
import './styles.css';


const heroeId1 = 'capi';
const heroeId2 = 'iron';


//Un callback es una función enviada por argumento que se ejecuta al terminar, también puede contener argumentos
// buscarHeroe(heroeId1, (err, heroe) => {

//     if (err) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
// });

/**
 * Nuestra funcion buscarHeroe recibe el id de un heroe como argumento, despues el metodo then especifica
 * que debe hacer dicha función. En este caso llama a otra función que recibe un heroe por parámetro
 * y manda a imprimir un mensaje.
 */
// buscarHeroe(heroeId1).then(heroe1 => {
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });


//Promise.all para ejecutar varias promesas simultáneamente, especificamos lo que queremos hacer cuando se resuelvan todas.
//Enviamos como argumento un array de promesas
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(heroes => {
    console.log(`Enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la misión`);
}).catch(err => {
    alert(err);
}).finally(() => {
    console.log('Finalizó el promise.all');
    
})

//Mismo que arriba pero usando desestructuración de arrays en el argumento de la función dentro del then
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })