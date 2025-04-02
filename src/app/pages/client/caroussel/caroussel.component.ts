import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})
export class CarousselComponent {
  constructor(private router:Router){}

  creerDevis(){
    this.router.navigate(["/client/quote"]);
  }
}

