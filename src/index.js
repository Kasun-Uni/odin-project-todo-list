import * as appController from "./appController.js";
import { renderProjectList, renderTodoList } from "./domController.js";

appController.init();
appController.addTodoToCurrentProject("Buy milk", "Get 2% milk", "2026-09-10", "high");
appController.addTodoToCurrentProject("Walk dog", "Around the block", "2026-09-12", "low");

renderProjectList(appController.getProjects(), appController.getCurrentProject(), () => {});
renderTodoList(appController.getCurrentProject(), {
  onToggleComplete: () => {},
  onExpandTodo: () => {},
  onDeleteTodo: () => {},
});