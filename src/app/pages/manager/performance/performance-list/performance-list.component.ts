import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserService } from '../../../../core/service/user.service';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-performance-list',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        CardModule
    ],
    templateUrl: './performance-list.component.html',
})
export class PerformanceListComponent {
    @Input() performances: any[] = [];
    @Input() title: string = "Performances";

}
