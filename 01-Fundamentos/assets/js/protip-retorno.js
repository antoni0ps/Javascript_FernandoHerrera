//Funcion para crear un objeto que tenga un nombre y apellido como propiedades
function crearPersona(nombrePrincipal, apellido) {
    return {
        nombre: nombrePrincipal,
        apellido: apellido
    };
};

//Cuando el nombre de la propiedad es el mismo que el nombre de la variable del parámetro no hace falta especificar 2 veces
//Funcion simplificada, no es necesario especificar propiedad y parámetro, javascript lo interpreta
function crearPersona2(nombre, apellido) {
    return { nombre, apellido };
};

const crearPersonaFlecha = (nombre, apellido) => {
    return { nombre, apellido };
};

const crearPersonaFlecha2 = (nombre, apellido) => ({ nombre, apellido }); //si queremos devovler un objeto hay que ponerlo entre paréntesis

const persona = crearPersona('Antonio', 'Piñero')
console.log(persona);





function imprimeArgumentos() {
    console.log(arguments);
};

//pasamos como argumento varibale con ... delante para que se cree un array con todos los argumentos que metamos al llamar a la función
const imprimeArgumentos2 = (...arguments) => { //La función de flecha no crea automáticamente los argumentos, hay que especificar en parámetro
    return arguments;
};

imprimeArgumentos('Hola', 35, false, true, 'Adios')
imprimeArgumentos2('Hola', 35, false, true, 'Adios')




//podemos especificar el nombre de los argumentos para identificarlos y después imprimirlos
const [saludo, edad, casado, vivo, despedida] = imprimeArgumentos2('Buenos días', 35, false, true, 'Hasta luego');
console.log({ saludo, edad, casado, vivo, despedida });


//Podemos cambiar el nombre de la propiedad del objeto
const { apellido: nuevoApellido } = crearPersona('Juan', 'Camarín')
console.log(nuevoApellido);


// DESESTRUCTURACIÓN DE ARGUMENTOS
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log('Nombre:', personaje.nombre);
//     console.log('Code Name:', personaje.codeName);
//     console.log('Vivo:', personaje.vivo);
//     console.log('Edad:', personaje.edad);
//     console.log('Trajes:', personaje.trajes);
// };


//Podemos especificar las propiedades del objeto que deseamos y en caso de no estar agluna podemos predefinir un valor ( edad )
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 35, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });

};





imprimePropiedades(tony)