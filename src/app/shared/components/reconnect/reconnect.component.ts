import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../../core/service/auth.service';


@Component({
  selector: 'app-reconnect',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './reconnect.component.html',
  styles: `
      body {
          background-color: rgba(240, 240, 240, 0.548);
      }
  `
})
export class ReconnectComponent {
  profile!: string;

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {
      const user = this.authService.getUserInfo();
      if (user && user != null) {
        this.profile = user.profile
            .toLowerCase()  
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
      } else {
        this.route.navigate(['/client/login']);
      }
          
  }

 }
