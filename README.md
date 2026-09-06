# Todo List App
 
A simple Todo List application built with **vanilla JavaScript**, **Webpack**, and **localStorage** for persistence. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list) curriculum.
 
## Features
 
- Create multiple **projects** (lists of todos)
- Switch between projects
- Delete projects (except the default one)
- Add todos with title, description, due date, priority, and notes
- Mark todos as complete/incomplete
- Click a todo to expand and edit its details
- Delete todos (with confirmation)
- Color-coded priority indicators (low / medium / high)
- Data is saved automatically to `localStorage` — refreshing the page keeps everything
## Tech used
 
- **JavaScript (ES Modules)** — app logic and DOM rendering
- **Webpack** — module bundler, dev server, HTML/CSS handling
- **date-fns** — date formatting/manipulation helper library
- **localStorage (Web Storage API)** — persists data across page reloads
## How to run this project
 
### 1. Install dependencies
 
```bash
npm install
```
 
### 2. Start the development server
 
```bash
npx webpack serve
```
 
### 3. Open the app
 
Go to [http://localhost:8080](http://localhost:8080) in your browser.
 
### 4. Build for production (optional)
 
```bash
npx webpack
```