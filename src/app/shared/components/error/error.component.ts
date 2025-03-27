import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    imports: [
        CommonModule,
        CardModule,
        ButtonModule
    ],
    styles: `
        body {
            background-color: rgba(240, 240, 240, 0.548);
        }
    `,
    standalone: true
})
export class ErrorComponent { 
    message: string = "Requested resource is not available.";

    constructor (
        private route: ActivatedRoute,
    ) {}

    ngOnInit (): void {
        const message = this.route.snapshot.paramMap.get('message');
        if (message)
            this.message = message;
    }
}