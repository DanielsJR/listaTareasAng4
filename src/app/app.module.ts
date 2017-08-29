import { TaskService } from './lista-tareas/task/task-service/task-service';
import { TaskIconsComponent } from './lista-tareas/task/task-icons/task-icons.component';
import { TaskTooltipDirective } from './lista-tareas/task/task-tooltip/task-tooltip.directive';
import { FormattedTimePipe } from './lista-tareas/formatted-time/formatted-time.pipe';
import { QueuedOnlyPipe } from './lista-tareas/queued-only/queued-only.pipe';
import { TaskComponent } from './lista-tareas/task/task.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


@NgModule({
  declarations: [
    TaskComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective,
    TaskIconsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [
    TaskComponent
  ]

})
export class AppModule { }
