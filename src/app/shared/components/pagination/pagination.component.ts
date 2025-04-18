import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
    SelectModule,
    FormsModule,
    PaginatorModule
  ],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent { 
  @Input() totalRecords: number = 0;
  @Input() rows: number = 10;
  @Input() first: number = 0;
  @Input() showCurrentPageReport: boolean = true;
  @Input() options: { label: string; value: number }[] = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 }
  ];

  @Output() pageChange = new EventEmitter<{ first: number; rows: number }>();

  

  onPageChange(event: { first?: number; rows?: number }) {
    const firstValue = event.first ?? 0;
    const rowsValue = event.rows ?? this.rows;
    this.pageChange.emit({ first: firstValue, rows: rowsValue });
  }

}
