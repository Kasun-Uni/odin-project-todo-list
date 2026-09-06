// src/index.js
import * as appController from "./appController.js";
import { renderProjectList, renderTodoList } from "./domController.js";

const dialog = document.getElementById("todo-dialog");
const form = document.getElementById("todo-form");
const dialogHeading = document.getElementById("todo-dialog-heading");

const titleInput = document.getElementById("todo-title-input");
const descriptionInput = document.getElementById("todo-description-input");
const dueDateInput = document.getElementById("todo-duedate-input");
const priorityInput = document.getElementById("todo-priority-input");
const notesInput = document.getElementById("todo-notes-input");

// Tracks whether we're editing an existing todo, or creating a new one
let editingTodo = null;

function render() {
  renderProjectList(
    appController.getProjects(),
    appController.getCurrentProject(),
    (project) => {
      appController.setCurrentProject(project);
      render();
    },
    (project) => {
      appController.removeProject(project);
      render();
    }
  );

  renderTodoList(appController.getCurrentProject(), {
    onToggleComplete: (todo) => {
      todo.toggleComplete();
      render();
    },
    onExpandTodo: (todo) => {
      openDialogForEdit(todo);
    },
    onDeleteTodo: (todo) => {
      appController.removeTodoFromCurrentProject(todo);
      render();
    },
  });
}

function openDialogForNewTodo() {
  editingTodo = null;
  form.reset();
  dialogHeading.textContent = "New Todo";
  dialog.showModal();
}

function openDialogForEdit(todo) {
  editingTodo = todo;
  dialogHeading.textContent = "Edit Todo";

  titleInput.value = todo.title;
  descriptionInput.value = todo.description;
  dueDateInput.value = todo.dueDate;
  priorityInput.value = todo.priority;
  notesInput.value = todo.notes;

  dialog.showModal();
}

// Add new project
document.getElementById("add-project-btn").addEventListener("click", () => {
  const name = prompt("Enter project name:");
  if (name && name.trim() !== "") {
    const newProject = appController.addProject(name.trim());
    appController.setCurrentProject(newProject);
    render();
  }
});

// Open dialog for a brand new todo
document.getElementById("add-todo-btn").addEventListener("click", () => {
  openDialogForNewTodo();
});

// Cancel button closes the dialog without saving
document.getElementById("todo-cancel-btn").addEventListener("click", () => {
  editingTodo = null;
  dialog.close();
});

// Submit handles BOTH creating a new todo AND saving edits to an existing one
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;
  const notes = notesInput.value;

  if (editingTodo) {
    editingTodo.updateDetails({ title, description, dueDate, priority, notes });
  } else {
    appController.addTodoToCurrentProject(title, description, dueDate, priority, notes);
  }

  editingTodo = null;
  dialog.close();
  render();
});

// Initial load
appController.init();
render();