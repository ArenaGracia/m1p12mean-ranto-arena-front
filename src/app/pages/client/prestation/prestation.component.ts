import { Component , OnInit } from '@angular/core';
import { Category } from '../../../shared/models/Category';
import { CategoryService } from '../../../core/service/category.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-prestation',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, RouterLink, LoadingSpinnerComponent],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss',
  providers: [CategoryService]
})

export class PrestationComponent implements OnInit {
  categories: Category[] = [];
  responsiveOptions: any[] | undefined;
  isLoading : boolean = true;

  constructor(private categoryService : CategoryService){}

  loadCatgories() : void{
    this.categoryService.getCategories().subscribe({
            next: (data) => {
                this.categories = data;
                this.isLoading = false;
            },
    });
  }

  ngOnInit(){
    this.loadCatgories();

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


}
