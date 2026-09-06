// src/appController.js
import Todo from "./todo.js";
import Project from "./project.js";
import { saveProjects, loadProjects } from "./storage.js";

let projects = [];
let currentProject = null;

function init() {
  const loadedProjects = loadProjects();

  if (loadedProjects && loadedProjects.length > 0) {
    projects = loadedProjects;
    currentProject = projects[0];
  } else {
    const defaultProject = new Project("Default");
    projects.push(defaultProject);
    currentProject = defaultProject;
  }
}

function save() {
  saveProjects(projects);
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
  save,
  getProjects,
  getCurrentProject,
  setCurrentProject,
  addProject,
  removeProject,
  addTodoToCurrentProject,
  removeTodoFromCurrentProject,
};