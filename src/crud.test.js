/** * @jest-environment jsdom */
import Todo from "./crud";
jest.mock("./localStorageMock");
const todo = new Todo();
describe("Create Todo", () => {
  test("creating todo", () => {
    todo.createTodo("todo1");
    expect(todo.todos.length).toBe(1);
  });