import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})
export class CarousselComponent {
  images = [
    'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3'
  ];
}

