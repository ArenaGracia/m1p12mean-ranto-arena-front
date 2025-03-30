import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/User';
import { TooltipModule } from 'primeng/tooltip';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [Toolbar, AvatarModule, ButtonModule, TooltipModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    imageUrl: string = '/src/assets/images/car-logo.jpg';
    user!: any;
    
    constructor(private authService: AuthService, private router: Router, private layoutService: LayoutService) {}

    ngOnInit() {
        this.user = this.authService.getUserInfo();
    }

    logOut () {
        this.authService.logout();
        this.router.navigate(['/manager/']);
    }

    toggleSidebar() {
      this.layoutService.toggleSidebar();
    }
 }
