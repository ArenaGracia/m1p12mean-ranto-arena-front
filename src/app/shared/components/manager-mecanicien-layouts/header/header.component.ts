import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/User';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [Toolbar, AvatarModule, ButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    @Output() toggleSidebar = new EventEmitter<void>();
    imageUrl: string = '/src/assets/images/car-logo.jpg';
    user!: any;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.user = this.authService.getUserInfo();
    }

    logOut () {
        this.authService.logout();
        this.router.navigate(['/manager/']);
    }
 }
