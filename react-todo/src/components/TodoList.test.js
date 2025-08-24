import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Test initial render
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Test adding a new todo
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

// Test toggling a todo
test("toggles a todo completed state", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  // Click once to mark completed
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");

  // Click again to mark not completed
  fireEvent.click(todo);
  expect(todo).not.toHaveStyle("text-decoration: line-through");
});

// Test deleting a todo
test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).toBeNull();
});
