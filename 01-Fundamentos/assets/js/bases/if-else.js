// IF

// = es asignación ||  == es comparación de valores  ||  === comparación de valores y tipo (idéntico)
let a = 15;


if (a >= 10) { //undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');

}

// console.log('fin de programa');

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay(); // 0: Domingo, 1: lunes ...

console.log(dia);

if (dia === 0) {
    console.log('domingo');

} else if (dia === 1) {
    console.log('lunes');

} else {
    console.log('No es lunes ni domingo');

}


//Sin usar If, Else o Switch, únicamente objetos

dia = 3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado,'
};

console.log(diasLetras[dia]);

const dias = ['domingo', 'lunes', 'martes', 'miercloes', 'jueves', 'viernes', 'sabado'];

console.log(dias[dia]);