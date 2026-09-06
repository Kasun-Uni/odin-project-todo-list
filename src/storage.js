// src/storage.js
import Todo from "./todo.js";
import Project from "./project.js";

const STORAGE_KEY = "todoAppProjects";

function saveProjects(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
}

function loadProjects() {
  let rawData;

  try {
    rawData = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to read from localStorage:", error);
    return null;
  }

  if (!rawData) return null;

  try {
    const parsedProjects = JSON.parse(rawData);

    // Rebuild real Project and Todo class instances with their methods restored
    return parsedProjects.map((projectData) => {
      const project = new Project(projectData.name);

      project.todos = projectData.todos.map((todoData) => {
        return new Todo(
          todoData.title,
          todoData.description,
          todoData.dueDate,
          todoData.priority,
          todoData.notes,
          todoData.completed
        );
      });

      return project;
    });
  } catch (error) {
    console.error("Failed to parse localStorage data:", error);
    return null;
  }
}

export { saveProjects, loadProjects };