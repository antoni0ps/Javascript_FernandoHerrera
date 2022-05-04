

// estructura similar a una base de datops
const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Tener una absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Reaccion alérgica a las picaduras de arañas'
    },
}

//el callback (funcion de retorno) se ejecuta cuando termine el proceso de buscar por id
export const buscarHeroe = (id, callback) => {
    
    //constante que almacena un heroe en base al id que enviemos como argumento a la funcion buscarHeroe
    const heroe = heroes[id];

    //Si el heroe existe el error es null y devuelve el heroe
    if (heroe) {
        callback(null, heroe);
    } else {
        //si hay un error el callback devuelve mensaje de error
        callback(`No existe un heroe con el id ${id}`);
    }

    //el callback recibe como primer argumento siempre un error , como segundo argumento un heroe
    //callback(err, heroe)
}