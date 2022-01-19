let todos = [];

export const createTodo = (description) => {
  const index = todos.length + 1;
  const completed = false;
  todos.push({ description, completed, index });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const editTheIndex = () => {
  let n = 0;
  todos.forEach((item) => {
    n += 1;
    item.index = n;
  });
};

export const deleteTodo = (index) => {
  todos = todos.filter((item) => Number(index) !== item.index);
  editTheIndex();
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getFromLocalStorage = () => {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
};

export const updateTodo = (index, description) => {
  const todo = todos.find((item) => Number(index) === item.index);
  todo.description = description;
  localStorage.setItem("todos", JSON.stringify(todos));
};
