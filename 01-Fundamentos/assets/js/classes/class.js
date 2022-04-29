/*----------------------------------------*/
//----------CLASES EN JAVASCRIPT----------//

//El constructor siempre devuelve una instancia del objeto

//CLASE
class Persona {

    //Para acceder a las propiedades estáticas se necesita acceder a la clase y no a la instancia, PERSONA
    static _contador = 0;
    static get getContador() {
        return Persona._contador + ' instancias';
    }

    static mostrarMensaje() {
        console.log('Hola a todos, soy un método estático');

    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //Constructor
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') { //Podemos poner valores por defecto

        //se puede exigir que tenga obligatoriamente algún parámetro al crear
        if (nombre === null) {
            throw ('Se debe definir un nombre')
        }

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._contador++; //cada vez que se crea una instancia se suma uno al contador
    }

    //Setters y Getters

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }


    get getComidaFavorita() {
        return `La comida favorita de ${this.codigo} es ${this.comida}`;
    }




    //Funciones
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad secreta es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy(); //Para llamar funciones del objeto dentro de otras con THIS
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}





//Creamos instancias de objeto Persona
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu amigo y vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman')




console.log(spiderman);

ironman.quienSoy();
// spiderman.quienSoy();
spiderman.miFrase();

//Setear la comida favorita
spiderman.setComidaFavorita = 'Pastel de tía May';


// ¡¡¡CUIDADO!!!
// spiderman.nemesis = 'Duende verde' // Se puede agregar una propiedad al objeto spiderman,  LA PROPIEDAD NO ES PRIVADA
// spiderman.comida = 'Patatas Fritas' // También se pueden modificar las propiedades existentes porque NO SON PRIVADAS



console.log('Conteo estático', Persona._contador);
console.log(Persona.getContador);
Persona.mostrarMensaje();