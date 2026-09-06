import * as appController from "./appController.js";

appController.init();
appController.addTodoToCurrentProject("Buy milk", "Get 2% milk", "2026-09-10", "high");

console.log(appController.getCurrentProject());
