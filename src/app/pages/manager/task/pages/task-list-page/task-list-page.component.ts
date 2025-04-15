import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../../../../shared/models/Task';
import { TaskService } from '../../../../../core/service/task.service';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { LoadingSpinnerComponent } from "../../../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-task-list-page',
    standalone: true,
    imports: [
    CommonModule,
    CardModule,
    TaskListComponent,
    LoadingSpinnerComponent
],
    templateUrl: './task-list-page.component.html',
})
export class TaskListPageComponent { 
    tasks: Task[] = [];
    first = 0;
    rows = 10;
    filters: any = {};
    totalRecords: number = 0;
    isLoading: boolean = true;

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        const page = Math.floor(this.first / this.rows) + 1;
        this.taskService.getAllTasks(page, this.rows, this.filters).subscribe({
            next: (data: any) => {
                this.tasks = data.tasks;
                this.totalRecords = data.totalRecords;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error getting tasks:', error);
            }
        });
    }

    // Si on détecte du changement dans la composant pagination
    onPaginationChange(event: { first: number; rows: number }) {
        this.first = event.first;
        this.rows = event.rows;
        console.log('Pagination mise à jour:', this.first, this.rows);
        this.getTasks();
      }

    // Si on détecte du changement dadns les filtres
    onFiltersChanged(newFilters: any) {
        this.filters = newFilters;
        console.log('Filtre mise à jour:', this.filters);
        this.first = 0; 
        this.getTasks();
    }
}
