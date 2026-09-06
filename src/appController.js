// src/appController.js
import Todo from "./todo.js";
import Project from "./project.js";

// Holds all projects
let projects = [];

// Tracks which project is currently being viewed
let currentProject = null;

function init() {
  const defaultProject = new Project("Default");
  projects.push(defaultProject);
  currentProject = defaultProject;
}

function getProjects() {
  return projects;
}

function getCurrentProject() {
  return currentProject;
}

function setCurrentProject(project) {
  currentProject = project;
}

function addProject(name) {
  const newProject = new Project(name);
  projects.push(newProject);
  return newProject;
}

function removeProject(project) {
  projects = projects.filter((p) => p !== project);

  // If we deleted the currently active project, fall back to the first one
  if (currentProject === project) {
    currentProject = projects[0] || null;
  }
}

function addTodoToCurrentProject(title, description, dueDate, priority, notes) {
  const todo = new Todo(title, description, dueDate, priority, notes);
  currentProject.addTodo(todo);
  return todo;
}

function removeTodoFromCurrentProject(todo) {
  currentProject.removeTodo(todo);
}

export {
  init,
  getProjects,
  getCurrentProject,
  setCurrentProject,
  addProject,
  removeProject,
  addTodoToCurrentProject,
  removeTodoFromCurrentProject,
};