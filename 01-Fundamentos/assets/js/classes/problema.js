//CLASES

//Forma deprecada para crear clases en javascript!!!

const antonio = {
    nombre: 'Antonio',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, edad ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 63
}



//Funcion para crear instancias, primera letra en mayúscula como las clases, DEPRECATED
function Persona(nombre, edad) {
    console.log('Se ejecutó esta linea');

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre}, edad ${this.edad}`);
    }

}

//Creamos una nueva instancia de Persona  (NEW OBLIGATORIO)
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 21);
console.log(maria);
maria.imprimir();
melissa.imprimir();