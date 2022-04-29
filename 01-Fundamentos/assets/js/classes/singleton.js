//--------------//

//SINGLETON
//Es una instancia unica de una clase de manera global para toda la aplicación, como por ejemplo, de una base de datos


class Singleton{

    static instancia;  //undefined en este momento
    nombre = '';

    constructor(nombre = '') {
        
        if (!!Singleton.instancia) {  //si ya existe la instancia
            return Singleton.instancia;
        }

        //si no existe la instancia
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
}

//Las instancias siempre tendrán el mismo nombre y será completamente iguales.

const instancia1 = new Singleton('ironman')
const instancia2 = new Singleton('spiderman')
const instancia3 = new Singleton('black panther')
console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);

