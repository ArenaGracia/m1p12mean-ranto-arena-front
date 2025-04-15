import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../../shared/models/Task';
import { TaskService } from '../../../core/service/task.service';
import { CardModule } from 'primeng/card';
import { TaskListComponent } from '../../manager/task/components/task-list/task-list.component';
import { AuthService } from '../../../core/service/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-task-mecanicien-list',
    standalone: true,
    imports: [
    CommonModule,
    TaskListComponent,
    CardModule,
    ToastModule,
    LoadingSpinnerComponent
],
    providers: [ MessageService ],
    templateUrl: './task-list.component.html',
})
export class TaskListMecanicienComponent { 
    tasks: Task[] = [];
    first = 0;
    rows = 10;
    filters: any = {};
    totalRecords: number = 0;
    isLoading: boolean = true;

    constructor(private authService: AuthService, private taskService: TaskService, public messageService: MessageService) {}

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        const page = Math.floor(this.first / this.rows) + 1;
        this.filters.userId = this.authService.getUserInfo().id;
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
