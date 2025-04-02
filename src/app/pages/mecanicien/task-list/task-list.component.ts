import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../../shared/models/Task';
import { TaskService } from '../../../core/service/task.service';
import { CardModule } from 'primeng/card';
import { TaskListComponent } from '../../manager/task/components/task-list/task-list.component';
import { AuthService } from '../../../core/service/auth.service';

@Component({
    selector: 'app-task-mecanicien-list',
    standalone: true,
    imports: [
        CommonModule,
        TaskListComponent,
        CardModule,

    ],
    templateUrl: './task-list.component.html',
})
export class TaskListMecanicienComponent { 
    tasks: Task[] = [];
    first = 0;
    rows = 10;
    filters: any = {};


    constructor(private authService: AuthService, private taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.filters.userId = this.authService.getUserInfo().id;
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
