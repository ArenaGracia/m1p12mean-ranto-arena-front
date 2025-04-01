import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { Task } from '../../../../../shared/models/Task';
import { TaskService } from '../../../../../core/service/task.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-affectation-task',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TaskListComponent,
    ToastModule,
    ConfirmDialogModule,
    LoadingSpinnerComponent
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './affectation-task.component.html',
})
export class AffectationTaskComponent { 
  tasks: Task[] = [];
  first = 0;
  rows = 10;

  isLoading: boolean = true;

  constructor(private taskService: TaskService, public messageService: MessageService, public confirmationService: ConfirmationService) {}

  ngOnInit() {
      this.getTasks();
  }

  getTasks() {
      this.taskService.getNonAffectedTasks(this.first, this.rows).subscribe({
          next: (tasks: any) => {
              this.tasks = tasks;
              this.isLoading = false;
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
      this.isLoading = true;
      this.getTasks();
    }

}
