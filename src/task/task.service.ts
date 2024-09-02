import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];

  create(task: TaskDTO) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  findById(id: string): TaskDTO {
    const foundTask = this.tasks.filter((t) => t.id === id);

    if (foundTask.length > 0) {
      return foundTask[0];
    }

    throw new NotFoundException(`Task with id ${id} not found.`);
  }
}
