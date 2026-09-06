// src/index.js
import * as appController from "./appController.js";
import { renderProjectList, renderTodoList } from "./domController.js";

const dialog = document.getElementById("todo-dialog");
const form = document.getElementById("todo-form");

function render() {
  renderProjectList(
    appController.getProjects(),
    appController.getCurrentProject(),
    (project) => {
      appController.setCurrentProject(project);
      render();
    }
  );

  renderTodoList(appController.getCurrentProject(), {
    onToggleComplete: (todo) => {
      todo.toggleComplete();
      render();
    },
    onExpandTodo: (todo) => {
      // We'll build the detail/edit view in Step 7
      console.log("Expand todo:", todo);
    },
    onDeleteTodo: (todo) => {
      appController.removeTodoFromCurrentProject(todo);
      render();
    },
  });
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

// Open the "new todo" dialog
document.getElementById("add-todo-btn").addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

// Cancel button closes the dialog
document.getElementById("todo-cancel-btn").addEventListener("click", () => {
  dialog.close();
});

// Submit the new todo form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("todo-title-input").value;
  const description = document.getElementById("todo-description-input").value;
  const dueDate = document.getElementById("todo-duedate-input").value;
  const priority = document.getElementById("todo-priority-input").value;

  appController.addTodoToCurrentProject(title, description, dueDate, priority);
  dialog.close();
  render();
});

// Initial load
appController.init();
render();