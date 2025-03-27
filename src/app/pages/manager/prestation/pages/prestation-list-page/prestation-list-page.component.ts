import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Prestation } from '../../../../../shared/models/Prestation';
import { PrestationService } from '../../../../../core/service/prestation.service';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { PrestationListComponent } from '../../components/prestation-list/prestation-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-prestation-list-page',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        LoadingSpinnerComponent,
        PrestationListComponent,
        ToolbarModule,
        ButtonModule
    ],
    templateUrl: './prestation-list-page.component.html',
})
export class PrestationListPageComponent {
    prestations: Prestation[] = [];
    isPrestationLoagin: boolean = true;

    constructor(private prestationService: PrestationService) {}

    ngOnInit () {
        // prendre les listes des prestations
        // this.prestationService.getAllPrestations().subscribe({
        //     next : (data) => {
        //         this.prestations = data;
        //         this.isPrestationLoagin = false;
        //     }
        // });
    }
}
