
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';


/* Error messages in a dialog */

export function showErrorMessageDialog(messageService: MessageService, message: string) {
    messageService.add({severity:'error', summary: 'Une erreur est survenue', detail: message});
}

export function showInfoMessageDialog(messageService: MessageService, message: string, title?: string) {
    if (title) 
        messageService.add({severity:'info', detail: message, summary:title});
    else
    messageService.add({severity:'info', detail: message});
}

export function showSuccessMessageDialog(messageService: MessageService, message: string, title?: string) {
    if (title)
        messageService.add({ severity: 'success', summary: title, detail: message});
    else
        messageService.add({ severity: 'success', detail: message});
}


/* Error redirection */

export function redirectToErrorPage(router: Router, message: string) {
    console.log(message);
    router.navigate([`error`, message]);
}
