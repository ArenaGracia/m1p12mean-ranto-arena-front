import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    imports: [ CardModule ],
    standalone: true,
    styles: `
        body {
            background-color: rgba(240, 240, 240, 0.548);
        }
    `
})
export class NotfoundComponent { }