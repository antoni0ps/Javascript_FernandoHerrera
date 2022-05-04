import { buscarHeroe, buscarHeroeAsync } from './js/promesas.js'
import { promesaRapida, promesaLenta, promesaMedia } from './js/promesas.js'
import { obtenerHeroesArr } from './js/await'


// promesaRapida.then(console.log);
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaLenta.then(console.log);

//PROMISE.RACE
//Esta funcion evalúa todas las promesas que se pasan como atributos y SOLO ejecuta la más rápida.
// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(mensaje => console.log(mensaje));




//ASYNC
// buscarHeroe('capi2')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn)

// buscarHeroeAsync('iron')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn)



obtenerHeroesArr().then(console.table)

