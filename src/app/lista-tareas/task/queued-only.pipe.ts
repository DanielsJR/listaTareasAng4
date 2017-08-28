import { Task } from '../task-model/task-model';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tareaQueuedOnly',
  pure: false
})
export class QueuedOnlyPipe implements PipeTransform {
  transform(tasks: Task[], ...args: any[]): Task[] {
    return tasks.filter((task: Task) => {
      return task.queued === args[0];
    });
  }
}
