import './style.css';
import Todo from './crud.js';

const todo = new Todo();
const displayTodo = (todo, checked) => `<li class="todo-added">
                    <div>
                    <input ${checked} class="check" type="checkbox" value="${todo.index}"/>
                     <span class="text-lined" data-index="${todo.index}" contentEditable="true"> ${todo.description} </span>
                     </div>
                     <div>
                     <i class="fas fa-ellipsis-v"></i>
                     <button class="delete" value="${todo.index}">
                     <i class="fa fa-trash"></i>
                  </button>
                    </div>
                </li>`;

const block = () => `<section class="main-container">
        <div>
            <div class="heading">
                <h2 class="todays"> Today's To Do</h2>
                <span> <i class="fas fa-sync-alt"></i> </span>
            </div>
                <form class="todo-form">
                    <input class="italic-text" name="description" type="text" placeholder="Add to your list"/>
                </form>
            <ul class="todos">
            </ul>
            <div class="clear">
                <a> Clear all completed </a>
            </div>
        </div>
    </section>`;

const ischecked = (item) => {
  if (item === true) return 'checked';
};

const main = document.querySelector('main');
main.innerHTML = block();

const todos = document.querySelector('.todos');
const structure = () => {
  todos.innerHTML = '';
  todo.getFromLocalStorage().forEach((item) => {
    todos.innerHTML += displayTodo(item, ischecked(item.completed));
  });
  const deleteTodo = document.querySelectorAll('.delete');
  deleteTodo.forEach((item) => {
    item.addEventListener('click', () => {
      todo.deleteTodo(item.getAttribute('value'));
      structure();
    });
  });

  const textLined = document.querySelectorAll('.text-lined');
  textLined.forEach((item) => {
    item.addEventListener('input', () => {
      todo.updateTodo(item.getAttribute('data-index'), item.innerHTML);
    });
  });

  const select = document.querySelectorAll('.check');
  select.forEach((item) => {
    item.addEventListener('change', () => {
      todo.isCompleted(item.value);
    });
  });
};

structure();

const form = document.querySelector('.todo-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  todo.createTodo(form.elements.description.value);
  form.reset();
  structure();
});

const completed = document.querySelector('.clear');
completed.addEventListener('click', (e) => {
  e.preventDefault();
  todo.done();
  structure();
});
