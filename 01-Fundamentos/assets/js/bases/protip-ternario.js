//Pro tip operador condicional ternario


const devuelveElMayor = (a, b) => {
    return (a > b) ? a : b;
}

const devuelveElMayorSimplificado = (a, b) => (a > b) ? a : b;


const tieneMembresia = (miembro) => (miembro) ? '2 dólares' : '10 dólares';


console.log(devuelveElMayor(10, 20));
console.log(tieneMembresia(false));

const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //() => 'Nick Fury' ()        //Funcion anónima autoinvocada
]

console.log(amigoArr);


//Operador ternario con multiples condiciones
const nota = 85; // A+, A, B+, B
const grado = nota >= 95 ? 'A+' : nota >= 90 ? 'A' : nota >= 85 ? 'B+' : nota >= 80 ? 'B' : nota >= 75 ? 'C+' : nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });