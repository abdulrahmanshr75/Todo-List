/** * @jest-environment jsdom */
import Todo from "./crud";
jest.mock("./localStorageMock");
const todo = new Todo();
describe("Create Todo", () => {
  test("creating todo", () => {
    todo.createTodo("todo1");
    expect(todo.todos.length).toBe(1);
  });

  test("check the descr", () => {
    todo.createTodo("test-2");
    expect(todo.todos[1].description).toBe("test-2");
  });
  test("check the descr", () => {
    todo.createTodo("test-3");
    expect(todo.todos.length).toBe(3);
  });
});

describe("deleteTodo", () => {
  it("remove todo", () => {
    const index = 1;
    todo.deleteTodo(index);
    expect(todo.todos.length).toBe(2);
  });
});
