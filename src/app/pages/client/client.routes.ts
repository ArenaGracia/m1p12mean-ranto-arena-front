import { Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
// import { EmptyComponent } from "./empty/empty.component";
// import { QuoteListComponent } from "./quote-list/quote-list.component";
// import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
// import { TaskListComponent } from "./task-list/task-list.component";


export default [
    { path: '', redirectTo: '/client/accueil', pathMatch: "full"},
    { path: 'accueil', component: AccueilComponent},
    // { path: 'quote/list', component: QuoteListComponent},
    // { path: 'quote/details', component: QuoteDetailsComponent},
    // { path: 'task/list', component: TaskListComponent},
] as Routes;