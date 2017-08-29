import { Task } from '../task-model/task-model';

import { Component, OnInit, Input } from '@angular/core';

/// - Child Icon Component
@Component({
  selector: 'tarea-task-icons',
  template: `<img *ngFor="let icon of icons"
                  src="/assets/img/reloj.png"
                  width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  size: number;

  icons: Object[] = [];

  ngOnInit() {
    this.icons.length = this.task.tareasRequeridas;
    this.icons.fill({ name: this.task.name });
  }
}
