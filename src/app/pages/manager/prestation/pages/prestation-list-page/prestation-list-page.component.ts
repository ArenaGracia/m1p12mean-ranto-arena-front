import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Prestation } from '../../../../../shared/models/Prestation';
import { PrestationService } from '../../../../../core/service/prestation.service';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { PrestationListComponent } from '../../components/prestation-list/prestation-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { PrestationFormComponent } from '../../components/prestation-form/prestation-form.component';

@Component({
    selector: 'app-prestation-list-page',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        LoadingSpinnerComponent,
        PrestationListComponent,
        ToolbarModule,
        ButtonModule,
        ConfirmDialogModule,
        ToastModule,
        DialogModule,
        PrestationFormComponent
    ],
    providers: [MessageService, ConfirmationService],
    templateUrl: './prestation-list-page.component.html',
})
export class PrestationListPageComponent {
    prestations: Prestation[] = [];
    isPrestationLoagin: boolean = true;
    showPrestationForm: boolean = false;

    newPrestation: Prestation = new Prestation();

    constructor(private prestationService: PrestationService, public messageService: MessageService, public confirmationService: ConfirmationService) {}

    ngOnInit () {
        // prendre les listes des prestations
        this.prestationService.getAllPrestations().subscribe({
            next : (data) => {
                this.prestations = data;
                this.isPrestationLoagin = false;
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la récuperation des prestations ' + error.error.message });
                this.prestations = [];
                this.isPrestationLoagin = false;
            }
        });
    }

    showPrestationFormDialog() {
        this.showPrestationForm = true;
    }
}
