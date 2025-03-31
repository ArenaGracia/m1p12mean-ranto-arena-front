import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../core/service/category.service';
import { Category } from '../../../shared/models/Category';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, RouterLink,LoadingSpinnerComponent ],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})

export class CategoryDetailComponent implements OnInit {

  isLoading : boolean = true;
  category? : Category; 
  responsiveOptions: any[] | undefined;
  
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private categoryService : CategoryService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.getCategoryById(id);
        console.log("Prestations:", this.category?.prestations);

    } else {
        this.router.navigate([`/error`, 'id du Catégorie non trouvé']);
    }

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

  getCategoryById(id : string){
    this.categoryService.getCategoryById(id!).subscribe({
			next : (data) => {
				this.category = data;
        this.isLoading = false;
			}, error : (error) => {
				this.router.navigate([`/error`, error.error.message]);
			}
		});
  }
}
