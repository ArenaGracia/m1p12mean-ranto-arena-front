import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Prestation } from '../../../../../shared/models/Prestation';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrestationService } from '../../../../../core/service/prestation.service';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';
import { PrestationFormComponent } from '../prestation-form/prestation-form.component';

@Component({
    selector: 'app-prestation-list',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        Dialog,
        PrestationFormComponent,
        MessageBlockComponent
    ],
    providers: [ MessageService, ConfirmationService ],
    templateUrl: './prestation-list.component.html',
})
export class PrestationListComponent { 
    @Input() prestations: Prestation[] = [];
    @Input() messageService!: MessageService;
    @Input() confirmationService!: ConfirmationService;
    
    selectedPretation: Prestation = new Prestation();
    showPrestationForm: boolean = false;
    
    constructor(private prestationService: PrestationService) {}

    editPrestation (prestation: Prestation) {
        this.selectedPretation = prestation;
        this.showPrestationForm = true;
    }

    
    confirmDelete(id:string) {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Voulez-vous vraiment supprimer cette prestation.',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Annuler',
                icon: 'pi pi-times',
                outlined: true,
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Supprimer',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
                this.prestationService.deletePrestation(id);
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Prestation supprimée', life: 3000 });
            },
            reject: () => {
            }
        });
    }

}
