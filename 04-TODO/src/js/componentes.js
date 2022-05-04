import { Todo } from "../classes";
import { todoList } from "../index"

//Referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



// Creamos el elemento html para la tarea
export const crearTodoHtml = (todo) => {

    const htmlTodo = `<li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
							<label>${todo.descripcion}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    //Agregamos la tarea al div de tareas
    divTodoList.append(div.firstElementChild);


    return div.firstElementChild;
}


//EVENTOS

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';

    }
})


divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { //click en el check
        todoList.marcarCompletada(todoId);
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) { //borrar la tarea, click en la "X"
        todoList.borrarTarea(todoId);
        divTodoList.removeChild(todoElemento);
    }
})

btnBorrarCompletados.addEventListener('click', (event) => {

    todoList.eliminarCompletadas();

    //bucle for descendiente desde el ultimo indice del array
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);

        }
    }
})

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) return;

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {

            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
})