import "./style.css";
import {
  getFromLocalStorage,
  createTodo,
  deleteTodo,
  updateTodo,
} from "./crud.js";

const displayTodo = (todo) => `<li class="todo-added">
                    <div>
                    <input class="check" type="checkbox" value="index"/>
                     <span class="text-lined" data-index="${todo.index}"contentEditable="true">  ${todo.description} </span>
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
                <span><i class="fas fa-sync-alt"></i></span>
            </div>
                <form class="todo-form">
                    <input class="italic-text" name="description" type="text" placeholder="Add to your list"/>
                </form>
            <ul class="todos">
            </ul>
            <div class="clear">
                <a > Clear all completed </a>
            </div>
        </div>
    </section>`;

const main = document.querySelector("main");
main.innerHTML = block();

const todos = document.querySelector(".todos");
const todoComponent = () => {
  todos.innerHTML = "";
  getFromLocalStorage().forEach((item) => {
    todos.innerHTML += displayTodo(item);
  });
  const remove = document.querySelectorAll(".delete");
  remove.forEach((item) => {
    item.addEventListener("click", () => {
      deleteTodo(item.getAttribute("value"));
      todoComponent();
    });
  });

  const textLined = document.querySelectorAll(".text-lined");
  textLined.forEach((item) => {
    item.addEventListener("input", () => {
      updateTodo(item.getAttribute("data-index"), item.innerHTML);
    });
  });
};

todoComponent();

const form = document.querySelector(".todo-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodo(form.elements.description.value);
  form.reset();
  todoComponent();
});
