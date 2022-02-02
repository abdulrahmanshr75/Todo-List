/** * @jest-environment jsdom */
import Todo from './crud.js';
import { block, displayTodo } from './domMock.js';

jest.mock('./localStorageMock.js');

const todo = new Todo();
describe('Create Todo', () => {
  test('creating todo', () => {
    todo.createTodo('Todo-1');
    expect(todo.todos.length).toBe(1);
  });
  test('check the description', () => {
    todo.createTodo('Todo-2');
    expect(todo.todos[1].description).toBe('Todo-2');
  });
  test('check the description', () => {
    todo.createTodo('Todo-3');
    expect(todo.todos.length).toBe(3);
  });
});

describe('deleteTodo', () => {
  test('remove todo', () => {
    const index = 1;
    todo.deleteTodo(index);
    expect(todo.todos.length).toBe(2);
  });
});

describe('Edit Todo', () => {
  const index = 1;
  test("Changing the text from 'Todo-2' to 'Hello-World'", () => {
    todo.updateTodo(index, 'Hello-World');
    expect(
      todo.todos
        .map((item) => {
          if (item.index === index) {
            return item.description;
          }
          return null;
        })
        .join(''),
    ).toBe('Hello-World');
  });
  test('It should change the status from false to true', () => {
    const index = 1;
    todo.isCompleted(index);
    expect(
      todo.todos
        .map((item) => {
          if (item.index === index) {
            return item.completed;
          }
          return null;
        })
        .join(''),
    ).toBeTruthy();
  });
  test('It should change the status from true to false', () => {
    const index = 1;
    todo.isCompleted(index);
    expect(
      todo.todos
        .map((item) => {
          if (item.index === Number(index)) {
            return item.completed;
          }
          return null;
        })
        .join(''),
    ).toMatch('false');
  });
});

describe('Clear all todos', () => {
  test('It should clear all the todos', () => {
    todo.done();
    expect(todo.todos.length).toBe(2);
  });
});
describe('DOM manipulation', () => {
  test('Display the main container', () => {
    document.body.innerHTML = '<main></main>';
    const main = document.querySelector('main');
    main.innerHTML = block();
    expect(document.querySelectorAll('.main-container').length).toBe(1);
  });
  test('Display the todo component', () => {
    document.body.innerHTML = '<ul class="todos"></ul>';
    const todos = document.querySelectorAll('.todos');
    todo.todos.forEach((item) => {
      todos.innerHTML += displayTodo(item);
    });
    const list = document.querySelectorAll('.todos');
    expect(list).toHaveLength(1);
  });
});
