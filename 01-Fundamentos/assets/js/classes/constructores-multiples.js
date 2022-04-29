//PRO TIP 2
//MULTIPLES CONSTRUCTORES (COMO EN JAVA)


class Persona {

    //Para poder utilizar diferentes constructores podemos crear un método estático que reciba por
    // parámetro lo que le querríamos que recibiese el nuevo constructor

    static recibeObjeto({ nombre, apellido, pais }) { //deconstrucción de objetos, le decimos que extraiga del objeto las propiedades
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`INFO: nombre: ${this.nombre}, apellido: ${this.apellido}, pais: ${this.pais}`);

    }

}

// variables nombre, apellido y pais
let nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

//Creamos un nuevo objeto persona pasando las variables de arriba como argumentos
const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();



//Creamos un nuevo objeto
const antonio = {
    nombre: 'Antonio',
    apellido: 'Piñero',
    pais: 'España'
}

//Creamos un nuevo objeto TIPO PERSONA llamando al método estático de la clase Persona, recibeObjeto
const persona2 = Persona.recibeObjeto(antonio)
persona2.getInfo();