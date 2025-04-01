import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Task } from '../../../../../shared/models/Task';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    PaginationComponent,
    ButtonModule
  ],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
    @Input() titre: string = "Tâches";
    @Input() rows: number = 10;
    @Input() tasks: Task[] = [];
    @Input() affectation: boolean = false;
    @Output() paginationChange = new EventEmitter<{ rows: number; first: number }>();

    first: number = 0;

    
    onChildPageChange(event: { first: number; rows: number }) {
        this.paginationChange.emit(event); // Transmet au parent
    }
}
