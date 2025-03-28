import { Routes } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { QuoteListPageComponent } from "./quote/pages/quote-list-page/quote-list-page.component";
import { QuoteDetailsComponent } from "./quote/pages/quote-details/quote-details.component";
import { TaskListComponent } from "./task/pages/task-list/task-list.component";


export default [
    { path: '', redirectTo: '/manager/login', pathMatch: "full"},
    { path: 'empty', component: EmptyComponent},
    { path: 'quote/list', component: QuoteListPageComponent},
    { path: 'quote/details/:id', component: QuoteDetailsComponent},
    { path: 'prestation',  loadChildren: () => import('./prestation/prestation.routes') },
    { path: 'task/list', component: TaskListComponent},
] as Routes;