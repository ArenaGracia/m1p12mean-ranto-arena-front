import { Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { PrestationComponent } from "./prestation/prestation.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";


export default [
    { path: '', redirectTo: '/client/accueil', pathMatch: "full"},
    { path: 'accueil', component: AccueilComponent},
    { path: 'prestation', component: PrestationComponent},
    { path: 'prestation/:id', component: CategoryDetailComponent},
] as Routes;