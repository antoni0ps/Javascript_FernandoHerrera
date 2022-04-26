//LOGICA BOOLEANA

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

// NOT O NEGACION
console.warn('Not or negacion') //distinto de...
console.log(true); //true
console.log(!true); //false

// AND
console.warn('And') //todas las condiciones se tienen que cumplir (regresar true)
console.log(true && true); //true
console.log(true && false); //false

console.log('================='); //util si queremos solo la primera instruccion
console.log(regresaFalse() && regresaTrue()); //solo se ejecuta regresaFalse e ignora lo que viene después

//OR
console.warn('Or');
console.log(true || false); //true si al menos una se cumple

//ASIGNACIONES
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; //Se asigna el ultimo valor si todos los anteriores tienen valor
const a2 = false && 'Hola Mundo' && 150; //false porque el primero no tiene valor, todos tienen que tener valor o ser true
const a3 = soyFalso || soyNull || 'Salgo yo' || true; //nunca llega al true ya que con "or" coge el primer valor válido
const a4 = soyFalso || 'Ya no soy falso'; // Devuelve el string ya que una de las dos se cumple al menos

console.log({ a1, a2, a3, a4 });