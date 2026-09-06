// src/project.js
class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoToRemove) {
    this.todos = this.todos.filter((todo) => todo !== todoToRemove);
  }
}

export default Project;