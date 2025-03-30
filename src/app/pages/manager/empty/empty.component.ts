import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [
    CommonModule, CardModule, ButtonModule
  ],
  template: `<p-card  >
  <div class="font-semibold text-xl mb-4">Empty Page</div>
  <p>Use this page to start from scratch and place your custom content.</p>
  </p-card>`,
  styleUrl: './empty.component.css',
})
export class EmptyComponent { }
