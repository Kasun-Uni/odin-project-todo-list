// src/domController.js

function renderProjectList(projects, currentProject, onSelectProject) {
  const projectListEl = document.getElementById("project-list");
  projectListEl.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;

    if (project === currentProject) {
      li.classList.add("active-project");
    }

    li.addEventListener("click", () => onSelectProject(project));
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
    deleteBtn.addEventListener("click", () => callbacks.onDeleteTodo(todo));

    li.appendChild(checkbox);
    li.appendChild(titleSpan);
    li.appendChild(deleteBtn);
    todoListEl.appendChild(li);
  });
}

export { renderProjectList, renderTodoList };