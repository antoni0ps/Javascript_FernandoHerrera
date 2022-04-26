// FUNCIONES

function saludar(nombre) {
  //Funcion tradicional
  console.log(arguments); //arguments hace referencia a todos los argumentos pasados por parámetro a la funcion

  console.log("Hola " + nombre);

  return 10;

  console.log("Soy un código que está despues del return"); //Depués de return nunca se ejecuta
}

const saludar2 = function (nombre) {
  //Funcion anónima
  console.log("Hola " + nombre);
};

const saludarFlecha = () => {
  //Funcion de flecha o lambda
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  //Funcion de flecha con argumentos
  console.log("Hola Flecha " + nombre);
};

const returnSaludar = saludar("Antonio", 35, true, "España");

console.log(returnSaludar);

// saludar2('Pepito');
// saludarFlecha('Pedro');
// saludarFlecha2('Pedro');



function suma(a, b) {   //devuelve la suma de a y b
  return a + b;
}

const suma2 = (a,b) =>{  //funcion de flecha devuelve suma
    return a + b;
}; 

const suma3 = (a,b) => a + b;  //Si la funcion tiene una sola linea se puede simplificar

console.log(suma(2, 3));
console.log(suma2(5,2));
console.log(suma3(8,2));



function getAleatorio(){          //Funcion normal
    return Math.random();
}

const getAleatorio2 = () =>{       //Funcion flecha
    return Math.random();
};

const getAleatorio3 = () => Math.random();  //Funcion flecha una sola linea (Más eficiente y recomendada)


console.log(getAleatorio());
console.log(getAleatorio2());
console.log(getAleatorio3());









