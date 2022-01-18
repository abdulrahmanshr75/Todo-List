import 'material-icons/iconfont/material-icons.css';
import './style.css';

const todoList = document.querySelector('.todos-container');

const todos = [
  {
    index: 0,
    description: 'go to doctor',
    completed: false,
  },
  {
    index: 1,
    description: 'buy grocery',
    completed: true,
  },
  {
    index: 2,
    description: 'walk the dog',
    completed: false,
  },
];

const render = () => {
  todoList.innerHTML = '';

  todos
    .sort((a, z) => a.index - z.index)
    .forEach((todo) => {
      todoList.innerHTML += `
      <li>
        <div class="container">
          <input class="check" type="checkbox" ${
  todo.completed ? 'checked' : ''
}/>
          <input class="todo-added" type="text" value='${
  todo.description
}' edit  />
          <span class="material-icons drag">more_vert</span>
        </div>
      </li>
      `;
    });
};

render();
