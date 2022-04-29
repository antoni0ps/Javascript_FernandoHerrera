import '../css/componentes.css'
// import webpackLogo from '../assets/img/webpack-logo.png'

//Debemos agregar la palabra reservada export a todo lo que queramos exportar a otro archivo js.
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);


    const imagen = document.createElement('img');
    imagen.src = webpackLogo;
    document.body.append(imagen);
}