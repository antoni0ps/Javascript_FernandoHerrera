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


buscarHeroe(heroeId1)