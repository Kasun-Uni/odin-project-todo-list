// src/todo.js
class Todo {
  constructor(title, description, dueDate, priority, notes = "", completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate; // store as a string, e.g. "2026-09-20"
    this.priority = priority; // "low" | "medium" | "high"
    this.notes = notes;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  updateDetails({ title, description, dueDate, priority, notes }) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    if (dueDate !== undefined) this.dueDate = dueDate;
    if (priority !== undefined) this.priority = priority;
    if (notes !== undefined) this.notes = notes;
  }
}

export default Todo;