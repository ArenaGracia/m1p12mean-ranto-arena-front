import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article, CategoryArticle } from '../../../../shared/models/Article';
import { ArticleService } from '../../../../core/service/article.service';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { LoadingSpinnerComponent } from "../../../../shared/components/loading-spinner/loading-spinner.component";
import { DialogModule } from 'primeng/dialog';
import { ArticleFormComponent } from "../article-form/article-form.component";
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { MessageBlockComponent } from "../../../../shared/components/message-block/message-block.component";
import { MontantPipe } from "../../../../shared/pipes/montant.pipe";
import { PaginationComponent } from "../../../../shared/components/pagination/pagination.component";

@Component({
    selector: 'app-article-crud',
    standalone: true,
    imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DataViewModule,
    DialogModule,
    ToastModule,
    LoadingSpinnerComponent,
    ArticleFormComponent,
    MessageBlockComponent,
    MontantPipe,
    PaginationComponent
],
    providers: [MessageService],
    templateUrl: './article-crud.component.html',
    styleUrl: './article-crud.component.scss',
})
export class ArticleCrudComponent { 
        
    articles: Article[] = [];
    categories: CategoryArticle[] = [];
    selectedArticle: Article = new Article();
    articleDialog: boolean = false;
    isEdit: boolean = false;
    isLoading: boolean = true;

    first = 0;
    rows = 10;
    totalRecords = 0;

    constructor(
        private articleService: ArticleService,
        public messageService: MessageService,
    ) {}

    ngOnInit() {
        this.loadArticles();
    }

    loadArticles() {
        const page = Math.floor(this.first / this.rows) + 1;
        this.articleService.getAllArticles(page, this.rows).subscribe(result => {
            this.articles = result.articles;
            this.totalRecords = result.totalRecords;
            this.isLoading = false;
        });
    }

    onPaginationChange(event: { first: number, rows: number }) {
        this.first = event.first;
        this.rows = event.rows;
        console.log("Changement pagination détecté :" + this.first + " rows : " + this.rows);
        
        this.loadArticles();
    }
    
    openNew() {
        this.selectedArticle = new Article();
        this.articleDialog = true;
        this.isEdit = false;
    }

    editArticle(article: Article) {
        this.selectedArticle = { ...article };
        this.articleDialog = true;
        this.isEdit = true;
    }

    hideDialog() {
        this.articleDialog = false;
    }
}
