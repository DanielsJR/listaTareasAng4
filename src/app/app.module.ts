import { TaskService } from './lista-tareas/task-service/task-service';
import { TaskTooltipDirective } from './lista-tareas/task/task-tooltip.directive';
import { QueuedOnlyPipe } from './lista-tareas/task/queued-only.pipe';
import { FormattedTimePipe } from './lista-tareas/task/formatted-time.pipe';
import { TaskComponent } from './lista-tareas/task/task.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { TaskIconsComponent } from './lista-tareas/task-icons/task-icons.component';


@NgModule({
  declarations: [
    TaskComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective,
    TaskIconsComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [TaskComponent]

})
export class AppModule { }
