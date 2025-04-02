import { Component } from '@angular/core';
import { CarousselComponent } from '../caroussel/caroussel.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CarousselComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
