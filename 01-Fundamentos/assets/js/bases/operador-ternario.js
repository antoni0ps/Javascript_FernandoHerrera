/*
 * Dias de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra en un sitio web, para consultar a que hora abre hoy....

const dia = 0; // 0: domingo, 1: lunes...
const horaActual = 10;


let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX


// if (dia === 0 || dia === 6) 
// if([0,6].includes(dia)){    
//     console.log('fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('dia de semana');
//     horaApertura = 11;
// }

/*
Con el operador ternario asignamos un valor a horaApertura sin la necesidad del código de arriba.
Si el día es domingo o sabado la hora de apertura es 9, sino es 11
*/
horaApertura = (dia === 0 || dia === 6) ? 9 : 11
horaApertura = ([0, 6].includes(dia)) ? 9 : 11


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura} ` //interpolación de strings con comilla inversa
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`

console.log({ horaApertura, mensaje });