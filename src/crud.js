export default class Todo {
  todos = [];

  createTodo = (description) => {
    const index = this.todos.length + 1;
    const completed = false;
    this.todos.push({ description, completed, index });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  editTheIndex = () => {
    let n = 0;
    this.todos.forEach((item) => {
      n += 1;
      item.index = n;
    });
  };

  deleteTodo = (index) => {
    this.todos = this.todos.filter((item) => Number(index) !== item.index);
    this.editTheIndex();
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  getFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
    return this.todos;
  };

  updateTodo = (index, description) => {
    const todo = this.todos.find((item) => Number(index) === item.index);
    todo.description = description;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  done = () => {
    const uncompleted = this.todos.filter((item) => item.completed !== true);
    this.editTheIndex();
    localStorage.setItem('todos', JSON.stringify(uncompleted));
  };

  isCompleted = (index) => {
    const todo = this.todos.find((item) => Number(index) === item.index);
    if (todo.completed === true) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  checkingTodo = () => {
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach((item) => {
      if (item.checked === true) {
        item.completed = false;
      } else {
        item.completed = true;
      }
      localStorage.setItem('todos', JSON.stringify(this.checkbox));
    });
  };
}
