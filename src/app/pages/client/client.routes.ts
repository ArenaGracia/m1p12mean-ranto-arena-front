import { Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { PrestationComponent } from "./prestation/prestation.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { QuoteComponent } from "./quote/quote.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";


export default [
    { path: '', redirectTo: '/client/accueil', pathMatch: "full"},
    { path: 'accueil', component: AccueilComponent},
    { path: 'prestation', component: PrestationComponent},
    { path: 'categorie/:id', component: CategoryDetailComponent},
    { path: 'quote/:id', component: QuoteDetailsComponent},
    { 
        path: 'quote',
        canActivate: [AuthGuard],
        data: { profile: 'Client' },
        component: QuoteComponent
    },
] as Routes;