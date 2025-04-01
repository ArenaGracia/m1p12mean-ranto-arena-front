import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Task } from '../../../../../shared/models/Task';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { Mecanicien } from '../../../../../shared/models/Mecanicien';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../../core/service/user.service';
import { TaskService } from '../../../../../core/service/task.service';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from "primeng/floatlabel";
import { DatePicker } from 'primeng/datepicker';
import { Category } from '../../../../../shared/models/Category';
import { CategoryService } from '../../../../../core/service/category.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    PaginationComponent,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    SelectModule,
    FormsModule,
    MessageBlockComponent,
    IconFieldModule, 
    InputTextModule, 
    InputIconModule,
    FloatLabel,
    DatePicker
  ],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
    @Input() titre: string = "Tâches";
    @Input() rows: number = 10;
    @Input() tasks: Task[] = [];
    @Input() affectation: boolean = false;
    @Output() paginationChange = new EventEmitter<{ rows: number; first: number }>();
    @Output() filtersChanged = new EventEmitter<any>(); // Émet les filtres vers le parent


    @Input() messageService!: MessageService;
    @Input() confirmationService!: ConfirmationService;

    showAffectationDialog: boolean = false;
    mecaniciens: Mecanicien[] = [];
    categories: Category[] = [];
    selectedMecanicien: Mecanicien = new Mecanicien();
    selectedTask?: any;

    // pour les filtres
    filters: any = {
        userId: null,
        startDate: null,
        endDate: null,
        state: null,
        categoryId: null
    };

    first: number = 0;

    constructor(private userService: UserService, private taskService: TaskService, private categoryService: CategoryService) {}

    ngOnInit() {
        this.userService.getAllMecaniciens().subscribe((mecaniciens) => {
            this.mecaniciens = mecaniciens;
        });
        this.categoryService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }

    confirmAffectation(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Affecter ce(tte) mécanicien(ne) à cette tâche ?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Annuler',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Valider',
            },
            accept: () => {
                if (this.selectedTask) {
                    this.affectTask();
                }
            },
            reject: () => {
            },
        });
        this.showAffectationDialog= false;
    }

    affectTask () {
        this.taskService.affect(this.selectedTask._id, this.selectedMecanicien._id).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'La tâche a été affectée avec succès', life: 3000 });
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.message, life: 3000 });
            },
        });
    }

    openDialog(task: any) {
        this.showAffectationDialog = true;
        this.selectedTask = task;
    }

    closeDialog() {
        this.showAffectationDialog = false;
        this.selectedTask = undefined;
    }

    // à chaque changement dans la pagination
    onChildPageChange(event: { first: number; rows: number }) {
        this.paginationChange.emit(event);
    }

    // à chaque changement du filtre
    applyFilters() {
        this.filtersChanged.emit(this.filters); // Envoie les filtres au parent
    }
}
