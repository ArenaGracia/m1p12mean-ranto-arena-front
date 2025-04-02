import { Routes } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { QuoteListPageComponent } from "./quote/pages/quote-list-page/quote-list-page.component";
import { QuoteDetailsComponent } from "./quote/pages/quote-details/quote-details.component";
import { TaskListPageComponent } from "./task/pages/task-list-page/task-list-page.component";


export default [
    { path: '', redirectTo: '/manager/login', pathMatch: "full"},
    { path: 'empty', component: EmptyComponent},
    { path: 'quote',  loadChildren: () => import('./quote/quote.routes') },
    { path: 'task',  loadChildren: () => import('./task/task.routes') },
    { path: 'prestation',  loadChildren: () => import('./prestation/prestation.routes') },
    { path: 'task/list', component: TaskListPageComponent},
] as Routes;