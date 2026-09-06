// src/domController.js

function renderProjectList(projects, currentProject, onSelectProject, onDeleteProject) {
  const projectListEl = document.getElementById("project-list");
  projectListEl.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = project.name;
    nameSpan.addEventListener("click", () => onSelectProject(project));

    li.appendChild(nameSpan);

    if (project.name !== "Default") {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "×";
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        if (confirm(`Delete project "${project.name}"?`)) {
          onDeleteProject(project);
        }
      });
      li.appendChild(deleteBtn);
    }

    if (project === currentProject) {
      li.classList.add("active-project");
    }

    projectListEl.appendChild(li);
  });
}

function renderTodoList(project, callbacks) {
  const todoListEl = document.getElementById("todo-list");
  const titleEl = document.getElementById("current-project-title");
  todoListEl.innerHTML = "";
  titleEl.textContent = project.name;

  project.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item", `priority-${todo.priority}`);
    if (todo.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => callbacks.onToggleComplete(todo));

    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${todo.title} (Due: ${todo.dueDate})`;
    titleSpan.addEventListener("click", () => callbacks.onExpandTodo(todo));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
    if (confirm(`Delete "${todo.title}"?`)) {
    callbacks.onDeleteTodo(todo);
      }
    })

    li.appendChild(checkbox);
    li.appendChild(titleSpan);
    li.appendChild(deleteBtn);
    todoListEl.appendChild(li);
  });
}

export { renderProjectList, renderTodoList };