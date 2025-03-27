import { Task } from "./Task";
import { User } from "./User";

export class Mecanicien extends User{
  tasks: Task[] = [];

  constructor(parameters: Partial<Mecanicien> = {}) {
    super(parameters);
    this.tasks = parameters.tasks ? parameters.tasks.map(task => new Task(task)) : [];
  }

}
