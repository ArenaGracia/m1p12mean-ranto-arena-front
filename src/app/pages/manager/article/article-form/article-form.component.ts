import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Article, CategoryArticle } from '../../../../shared/models/Article';
import { CategoryArticleService } from '../../../../core/service/category-article.service';
import { ArticleService } from '../../../../core/service/article.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'app-article-form',
    standalone: true,
    imports: [
        CommonModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        SelectModule,
        FloatLabelModule
    ],
    templateUrl: './article-form.component.html'
})
export class ArticleFormComponent implements OnInit {
    @Input() visible: boolean = false;
    @Input() article: Article = new Article();
    @Input() isEdit: boolean = false;
    @Input() messageService!: MessageService;
    
    newFileSelected: boolean = false;
    selectedFile: File | null = null;
    imageBase64: string = '';

    @Output() onClose = new EventEmitter<void>();
    @Output() onSave = new EventEmitter<Article>();

    categories: CategoryArticle[] = [];

    constructor(
        private articleService: ArticleService,
        private categoryService: CategoryArticleService
    ) {}

    ngOnInit() {
        this.loadCategories();
    }

    loadCategories() {
        this.categoryService.getCategoriesArticle().subscribe({
            next: (data: CategoryArticle[]) => this.categories = data 
        });
    }

    saveArticle() {
        if (this.isEdit) {
            this.updateArticle();
        } else {
            this.createArticle();
        }
    }

    createArticle() {
        this.articleService.createArticle(this.article).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Article ajouté' });
                this.onClose.emit();
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'ajout' });
            }
        });
    }

    updateArticle() {
        this.articleService.updateArticle(this.article._id, this.article).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Article modifié' });
                this.onClose.emit();
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la modification' });
            }
        });
    }

    closeDialog() {
        this.onClose.emit();
    }
    
    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            const reader = new FileReader();
            reader.onload = () => {
                this.imageBase64 = reader.result as string;
                console.log(`Taille de l'image encodée : ${this.imageBase64.length} caractères`);
                this.article.image = this.imageBase64;
            };
            reader.readAsDataURL(file);
        }
    }

}
