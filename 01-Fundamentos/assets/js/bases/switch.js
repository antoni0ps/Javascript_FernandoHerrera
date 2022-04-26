//SWITCH

const dia = 9; //0: domingo

//Evalúa el valor que introducimos por parámetro y ejecuta el caso que coincida
switch (dia) {
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miércoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    case 6:
        console.log('sábado');
        break;
    default:
        console.log('Ningún día de la semana elegido');
}