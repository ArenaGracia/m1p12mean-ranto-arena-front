import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CardModule],
  template: `
    <router-outlet />
  `,
  styles: `
  
  `
})
export class AppComponent {
  title = 'Garage Application';
}
