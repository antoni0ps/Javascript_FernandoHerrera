

export class Todo {

    constructor(descripcion) {

        this.descripcion = descripcion;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}