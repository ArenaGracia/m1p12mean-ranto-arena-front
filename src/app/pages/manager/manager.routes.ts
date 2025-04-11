import { Routes } from "@angular/router";
import { RevenueComponent } from "./revenue/revenue.component";
import { QuoteListPageComponent } from "./quote/pages/quote-list-page/quote-list-page.component";
import { QuoteDetailsComponent } from "./quote/pages/quote-details/quote-details.component";
import { TaskListPageComponent } from "./task/pages/task-list-page/task-list-page.component";
import { AppointmentPageComponent } from "./appointment/appointment-page/appointment-page.component";
import { PerformancePageComponent } from "./performance/performance-page/performance-page.component";
import { ArticleCrudComponent } from "./article/article-crud/article-crud.component";


export default [
    { path: '', redirectTo: '/manager/login', pathMatch: "full"},
    { path: 'revenue', component: RevenueComponent},
    { path: 'quote',  loadChildren: () => import('./quote/quote.routes') },
    { path: 'task',  loadChildren: () => import('./task/task.routes') },
    { path: 'appointment',  component: AppointmentPageComponent },
    { path: 'prestation',  loadChildren: () => import('./prestation/prestation.routes') },
    { path: 'task/list', component: TaskListPageComponent},
    { path: 'performances', component: PerformancePageComponent},
    { path: 'article', component: ArticleCrudComponent},
] as Routes;