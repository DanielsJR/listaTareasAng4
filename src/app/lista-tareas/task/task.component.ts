import { TaskService } from './task-service/task-service';
import { Task } from './task-model/task-model';
import { Component, Directive } from '@angular/core';

/// - Main Parent Component
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})

export class TaskComponent {
  today: Date;
  tasks: Task[];
  queuedTareas: number;
  queueHeaderMapping: any = {
    '=0': 'Sin tareas',
    '=1': 'Una tarea',
    'other': '# tareas'
  };

  constructor() {
    const taskService: TaskService = new TaskService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
    this.actualizarTareasEnCola();
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.actualizarTareasEnCola();
  }

  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
        return tareas + queuedTask.tareasRequeridas;
      }, 0);
  }
}
