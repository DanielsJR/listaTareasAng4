import { Task } from '../task-model/task-model';
import { Directive, HostListener, Input } from '@angular/core';

/// Custom Directives
@Directive({
  selector: '[task]'
})
export class TaskTooltipDirective {

  private defaultTooltipText: string;

  @Input()
  task: Task;

  @Input()
  taskTooltip: any;

  @HostListener('mouseover')
  onMouseOver() {
    if (!this.defaultTooltipText && this.taskTooltip) {
      this.defaultTooltipText = this.taskTooltip.innerText;
    }
    this.taskTooltip.innerText = this.task.name;
  }

  @HostListener('mouseout')
  onMouseOut() {
    if (this.taskTooltip) {
      this.taskTooltip.innerText = this.defaultTooltipText;
    }
  }
}
