import { Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { PrestationComponent } from "./prestation/prestation.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { QuoteComponent } from "./quote/quote.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { CarComponent } from "./car/car.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";


export default [
    { path: '', redirectTo: '/client/accueil', pathMatch: "full"},
    { path: 'accueil', component: AccueilComponent},
    { path: 'prestation', component: PrestationComponent},
    { path: 'categorie/:id', component: CategoryDetailComponent},
    { path: 'create-quote', component: QuoteFormComponent},
    { 
        path: 'quote',
        canActivate: [AuthGuard],
        data: { profile: 'Client' },
        component: QuoteComponent
    },
    { 
        path: 'quote/:id',
        canActivate: [AuthGuard],
        data: { profile: 'Client' },
        component: QuoteDetailsComponent
    },
    { 
        path: 'create-quote',
        canActivate: [AuthGuard],
        data: { profile: 'Client' },
        component: QuoteFormComponent
    },
    { 
        path: 'car',
        canActivate: [AuthGuard],
        data: { profile: 'Client' },
        component: CarComponent
    },
] as Routes;