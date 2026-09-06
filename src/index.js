import Todo from "./todo.js";
import Project from "./project.js";

const defaultProject = new Project("Default");

const testTodo = new Todo("Buy milk", "Get 2% milk", "2026-09-10", "high");
defaultProject.addTodo(testTodo);

console.log(defaultProject);