


// estructura similar a una base de datos
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


export const buscarHeroe = (id) => {
    
    const heroe = heroes[id];


    //Dentro de la promesa se recibe un callback que se va a ejecutar
    //El callback de la promesa recibe 2 argumentos, resolve para cuando se hace correctamente y reject para cuando falla
    return new Promise((resolve, reject) => {
        
        if (heroe) {
            resolve(heroe);
        } else
            reject('No existe un héroe con el id ${id}');

    });

}