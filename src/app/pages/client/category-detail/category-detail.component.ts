import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../core/service/category.service';
import { Category } from '../../../shared/models/Category';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent implements OnInit {

  isLoading : boolean = true;
  category? : Category; 
  
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private categoryService : CategoryService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
		
		if (id) {
			this.getCategoryById(id);
		} else {
			this.router.navigate([`/error`, 'id du Catégorie non trouvé']);
		}
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
