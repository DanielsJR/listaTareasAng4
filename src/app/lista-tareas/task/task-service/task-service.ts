import { Task } from '../task-model/task-model';

/// Servicio de Datos Locales
export class TaskService {
  public taskStore: Task[] = [];

  constructor() {
    const tasks = [
      {
        name: 'Preparar guión Videotutorial',
        deadline: '03 Nov 2017',
        tareasRequeridas: 2
      }, {
        name: 'Buscar imágenes y videos',
        deadline: '03 Nov 2016',
        tareasRequeridas: 1
      }, {
        name: 'Grabación Completa',
        deadline: '04 Nov 2016',
        tareasRequeridas: 2
      }, {
        name: 'Edición y Producción',
        deadline: '05 Nov 2016',
        tareasRequeridas: 3
      }
    ];

    this.taskStore = tasks.map(task => {
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        queued: false,
        tareasRequeridas: task.tareasRequeridas
      };
    });
  }
}
