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
            reject(`No existe un héroe con el id ${id}`);
    });
}



//ASYNC para funciones asíncronas devuelven por defecto una nueva promesa que resuelve el valor del return
//esta funcion hace exactamente lo mismo que la de arriba
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw Error(`No existe un héroe con el id ${id}`);
    }
}


//Declaración de promesas con diferentes timeouts
const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa lenta') }, 2000);
})
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa Media') }, 1500);
})
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa Rápida') }, 1000);
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}