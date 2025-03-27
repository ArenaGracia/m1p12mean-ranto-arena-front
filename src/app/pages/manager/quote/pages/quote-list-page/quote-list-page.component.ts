import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Quote } from '../../../../../shared/models/Quote';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';
import { ButtonModule } from 'primeng/button';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { QuoteListComponent } from '../../components/quote-list/quote-list.component';

@Component({
    selector: 'app-quote-list-page',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        CardModule,
        ButtonModule,
        QuoteListComponent
    ],
    templateUrl: './quote-list-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteListPageComponent { 
    quotes: Quote[] = [
        {
        id: '',
        user: {
            id:'1', 
            name:'Ranto', 
            firstName:'jeremie', 
            email:'ranto@gmail.com', 
            password:'', 
            contact:"033 32 033 73", 
            profile: {
            id:'1', 
            name:'client'
            },
            cars: []
        },
        totalPrice: 12,
        state: {
            id: '',
            name: 'Non validé',
            value: 0,
            severity: 'danger'
        },
        discount: 0,
        quoteDetails: []
        },
        {
        id: '',
        user: {
            id:'1', 
            name:'Ramaro', 
            firstName:'Tiana', 
            email:'ranto@gmail.com', 
            password:'', 
            contact:"033 32 033 73", 
            profile: {
            id:'1', 
            name:'client'
            },
            cars: []
        },
        totalPrice: 12,
        state: {
            id: '',
            name: 'Non validé',
            value: 0,
            severity: 'danger'
        },
        discount: 0,
        quoteDetails: []
        },
        {
        id: '',
        user: {
            id:'1', 
            name:'Mamy', 
            firstName:'Niaina', 
            email:'ranto@gmail.com', 
            password:'', 
            contact:"033 32 033 73", 
            profile: {
            id:'1', 
            name:'client'
            },
            cars: []
        },
        totalPrice: 12,
        state: {
            id: '',
            name: 'Non validé',
            value: 0,
            severity: 'danger'
        },
        discount: 0,
        quoteDetails: []
        },
    ];
    
}
