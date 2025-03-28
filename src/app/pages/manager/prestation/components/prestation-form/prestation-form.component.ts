import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { Prestation } from '../../../../../shared/models/Prestation';
import { Category } from '../../../../../shared/models/Category';
import { CategoryService } from '../../../../../core/service/category.service';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { RadioButton } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrestationService } from '../../../../../core/service/prestation.service';

@Component({
    selector: 'app-prestation-form',
    standalone: true,
    imports: [
        CommonModule,
        SelectModule,
        RadioButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        TextareaModule,
        RadioButton,
        ButtonModule,
    ],
    providers: [ MessageService, ConfirmationService ],
    templateUrl: './prestation-form.component.html',
})
export class PrestationFormComponent { 
    @Input() prestation: Prestation = new Prestation();
    @Input() messageService!: MessageService;
    @Input() confirmationService!: ConfirmationService;
    @Output() onSave = new EventEmitter<Prestation>();

    submitted: boolean = false;
    categories: Category[] = [];
    isUpdating: boolean = false;
    newFileSelected: boolean = false;
    selectedFile: File | null = null;
imageBase64: string = '';

    constructor(private categoryService: CategoryService, private prestationService: PrestationService) {}

    ngOnInit() {
        this.categoryService.getCategories().subscribe({
            next: (data) => {
                this.categories = data;
            },
        });
        this.isUpdating = (this.prestation._id) ? true : false;
    }

    confirmSave(event: Event) {
        this.messageService.clear();
        let message = (this.isUpdating) ? 'la mise à jour' : 'l\'enregistrement'
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Confirmation de '+message+' de la prestation ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            closable: true,
            closeOnEscape: true,
            rejectButtonProps: {
                label: 'Annuler',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Enregistrer',
            },
            rejectButtonStyleClass:"p-button-text",
            accept: () => {
                this.savePrestation();
            },
            reject: () => {
            }
        });
    }

    savePrestation () {
        if (this.isUpdating) {
            this.prestationService.updatePrestation(this.prestation._id, this.prestation).subscribe({
                next : (prestation) => {
                    this.onSave.emit(prestation);
                    this.messageService.add({ severity: 'info', detail: 'La prestation a été mise à jour', life: 3000 });
                }, error: (error) => {
                    console.log(error.message);
                    
                    this.messageService.add({ severity: 'danger', detail: 'Une erreur est survenue lors de la mise à jour :' + error.error, life: 3000 });
                }
            });
        } else {
            this.prestationService.createPrestation(this.prestation).subscribe({
                next : (prestation) => {
                    this.onSave.emit(prestation);
                    this.messageService.add({ severity: 'info', detail: 'La prestation a été enregistrée', life: 3000 });
                }, error: (error) => {
                    this.messageService.add({ severity: 'danger', detail: 'Une erreur est survenue lors de l\'enregistrement :' + error.error, life: 3000 });
                }
            });
        }
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            const reader = new FileReader();
            reader.onload = () => {
                this.imageBase64 = reader.result as string;
                this.prestation.image = this.imageBase64;
            };
            reader.readAsDataURL(file);
        }
    }

}
