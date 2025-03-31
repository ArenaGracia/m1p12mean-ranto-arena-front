import { Routes } from "@angular/router";
import { PrestationListPageComponent } from "../prestation/pages/prestation-list-page/prestation-list-page.component";
import { QuoteListPageComponent } from "./pages/quote-list-page/quote-list-page.component";
import { QuoteDetailsComponent } from "./pages/quote-details/quote-details.component";
import { QuoteListValidationPageComponent } from "./pages/quote-list-validation-page/quote-list-validation-page.component";

export default [
    { path: 'list', component: QuoteListPageComponent},
    { path: 'list/validation', component: QuoteListValidationPageComponent},
    { path: 'details/:id', component: QuoteDetailsComponent},
] as Routes;