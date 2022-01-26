/** * @jest-environment jsdom */
import Todo from './crud.js';

jest.mock('./localStorageMock');
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
  it('remove todo', () => {
    const index = 1;
    todo.deleteTodo(index);
    expect(todo.todos.length).toBe(2);
  });
});
