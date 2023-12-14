import { Task } from "./task";

export class Project {
  constructor(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;

    this.tasks = new Array
  }

  addNewTasks(id, title) {
    this.tasks.push(new Task(id, title))
  }

  deleteTask(id) {

  }
}
