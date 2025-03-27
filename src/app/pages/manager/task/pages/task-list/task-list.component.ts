import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Task } from '../../../../../shared/models/Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TableModule
  ],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent { 
  tasks: Task[] = [];

  constructor() {}

  
}
