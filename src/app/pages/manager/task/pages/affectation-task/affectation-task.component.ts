import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { Task } from '../../../../../shared/models/Task';
import { TaskService } from '../../../../../core/service/task.service';

@Component({
  selector: 'app-affectation-task',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TaskListComponent
  ],
  templateUrl: './affectation-task.component.html',
})
export class AffectationTaskComponent { 
  tasks: Task[] = [];
  first = 0;
  rows = 10;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
      this.getTasks();
  }

  getTasks() {
      this.taskService.getAllTasks(this.first, this.rows).subscribe({
          next: (tasks: any) => {
              this.tasks = tasks;
          },
          error: (error) => {
              console.error('Error getting tasks:', error);
          }
      });
  }

  onPaginationChange(event: { first: number; rows: number }) {
      this.first = event.first;
      this.rows = event.rows;
      console.log('Pagination mise à jour:', this.first, this.rows);
      this.getTasks();
    }

}
