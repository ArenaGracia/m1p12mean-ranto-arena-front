import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserService } from '../../../../core/service/user.service';
import { PerformanceListComponent } from "../performance-list/performance-list.component";
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-performance-page',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        PerformanceListComponent
    ],
    providers: [MessageService],
    templateUrl: './performance-page.component.html',
})
export class PerformancePageComponent { 
    performances: any[] = [];
    
    constructor(private userService: UserService, private messageService: MessageService) {}

  
    ngOnInit () {
        this.userService.getPerformancesPerTasks().subscribe({
            next : (data) => {
                this.performances = data;
            }, error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Une erreur est survenue', detail: error.error.message, life: 3000 });
            }
        });
    }

}
