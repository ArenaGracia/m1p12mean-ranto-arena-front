import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../../core/service/brand.service';
import { TagModule } from 'primeng/tag';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [CommonModule, TagModule , LoadingSpinnerComponent, CarouselModule],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})
export class CarousselComponent implements OnInit {
  marques : any[] = [];
  responsiveOptions : any[] = [];
  constructor(private router:Router, private marqueService : BrandService){}

  ngOnInit(): void {
    this.loadMarques();

    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
    ]
  }

  loadMarques(){
    this.marqueService.getBrands().subscribe(data => this.marques =data);
  }

  creerDevis(){
    this.router.navigate(["/client/quote"]);
  }
}

