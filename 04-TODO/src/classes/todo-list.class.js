export class TodoList {

    constructor() {

        // this.todoList = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todoList.push(todo);
        this.guardarLocalStorage();
    }

    //regresa una nueva lista con todos los valores que no coincidan con el id de nuestra tarea
    //Lista nueva sin la tarea que queremos borrar, hace el efecto de borrado.
    borrarTarea(id) {
        this.todoList = this.todoList.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletada(id) {

        for (const todo of this.todoList) {
            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletadas() {

        this.todoList = this.todoList.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }


    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todoList));
    }

    cargarLocalStorage() {

        //if else con operador ternario
        this.todoList = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        
    }
}