//------------------------------//


//PROPIEDADES PRIVADAS EN CLASES

class Rectangulo {


    //propiedad privada
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;


        this.#area = base * altura;
    }

    //Funcion privada
    #calcularArea() {
        return this.base * this.altura;
    }
}


const rectangulo1 = new Rectangulo(10, 15);

console.log(rectangulo1);
//console.log(rectangulo1.#calcularArea());   Funcion privada
