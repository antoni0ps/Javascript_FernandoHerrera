import './styles.css';
import { Todo, TodoList } from './classes'; //Importaciones de clases
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

const todo1 = new Todo('Comprar un dinosaurio');

todoList.nuevoTodo(todo1);



console.log(todoList);

crearTodoHtml(todo1);