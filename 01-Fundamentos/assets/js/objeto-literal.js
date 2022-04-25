// OBJETOS LITERALES

const personaje = { //Cuando se vean llaves de apertura y cierre asociamos a un objeto, los literales tienen pares de valores (clave, valor)
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War' //Para declarar propiedades con espacio o guión se ponen entre comilla simples
};

//diferentes formas de acceder a los atributos del objeto
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coordenadas:', personaje.coords);
console.log('Latitud:', personaje.coords.lat);
console.log('Longitud:', personaje.coords.lng);

console.log('Numero de trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo'; //Creamos variable o constante cuyo nombre coincide con una propiedad
console.log(personaje[x]); //Llamamos a esa propiedad mediante la notación con corchete

console.log('Ultima pelicula:', personaje['ultima pelicula']); //Para llamar a propiedades con espacio o guion se llaman com comilla simple


// MÁS DETALLES

delete personaje.edad; //delete para borrar propiedades de un objeto
console.log(personaje);


personaje.casado = true; //para agregar una nueva propiedad
personaje.gafas = 'Azules';


const entriesPares = Object.entries(personaje); //Object.entries para convertir el objeto a array de pares de valores (nombre:, Tony Stark)
console.log(entriesPares);


Object.freeze(personaje); //Object.freeze para bloquear cambios en el objeto y hacerlo inmutable

personaje.dinero = 10000000000; //no funciona


const propiedades = Object.getOwnPropertyNames(personaje); //Para obtener las propiedades del objeto en forma de array
console.log(propiedades);

const valores = Object.values(personaje); //Para obtener los valores de las propiedades del objeto
console.log(valores);