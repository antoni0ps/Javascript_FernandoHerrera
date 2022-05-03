

export class TodoList{

    constructor() {
        
        this.todoList = [];
    }

    nuevoTodo(todo) {
        this.todoList.push(todo);
    }

    //regresa una nueva lista con todos los valores que no coincidan con el id de nuestra tarea
    //Lista nueva sin la tarea que queremos borrar, hace el efecto de borrado.
    borrarTarea(id) {
        this.todoList = this.todoList.filter(todo => todo.id != id)
    }

    marcarCompletada(id) {
        
        for (const todo of this.todoList) {
            if (todo.id == id) {
                
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletadas() {
        
        this.todoList = this.todoList.filter(todo => !todo.completado);
    }
}