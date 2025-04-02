import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../../core/service/auth.service';

@Component({
    selector: 'app-unauthorized',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        RouterLink
    ],
    templateUrl: './unauthorized.component.html',
    styles: `
        body {
            background-color: rgba(240, 240, 240, 0.548);
        }
    `
})
export class UnauthorizedComponent {
    profile!: string;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        const user = this.authService.getUserInfo();
        this.profile = user.profile
            .toLowerCase()  
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
            
    }
}
