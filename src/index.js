import './styles.css';

import {Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class'



 export const todoList=new TodoList();

const tarea =new Todo('Aprender JavaScript!!!');

//tarea.completado=true

todoList.nuevoTodo(tarea)



console.log(todoList);

crearTodoHtml( tarea )