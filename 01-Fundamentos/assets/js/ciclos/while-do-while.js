//  WHILE Y DO WHILE


const coches = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('WHILE')
    //undefined, null y false son condiciones falsas. El ciclo no se ejecutaría si los utilizamos como condicion del while
while (i < coches.length) {
    console.log(coches[i]);
    i++;
}
//Mismo resultado que arriba, (mientras que haya un coche en la posicion [i] imprime el coche)
while (coches[i]) {
    console.log(coches[i]);
    i++;
}

//Break para detener el ciclo cuando queramos y continue para que siga cuando llegue a la condicion deseada
// while (coches[i]) {
//     if (i === 1) {
//         break;
//         //continue;
//     }
//     console.log(coches[i]);
//     i++;
// }

console.warn('DO WHILE')
    // Do while siempre se ejecuta una vez al menos aunque la condición no se cumpla.
let j = 0;

do {
    console.log(coches[j])
    j++;
} while (coches[j])