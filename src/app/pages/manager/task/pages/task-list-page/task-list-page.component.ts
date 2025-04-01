import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../../../../shared/models/Task';
import { TaskService } from '../../../../../core/service/task.service';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
    selector: 'app-task-list-page',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        TaskListComponent
    ],
    templateUrl: './task-list-page.component.html',
})
export class TaskListPageComponent { 
    tasks: Task[] = [];
    first = 0;
    rows = 10;
    filters: any = {};

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getAllTasks(this.first, this.rows, this.filters).subscribe({
            next: (tasks: any) => {
                this.tasks = tasks;
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
