import { Routes } from "@angular/router";
import { PrestationListPageComponent } from "../prestation/pages/prestation-list-page/prestation-list-page.component";
import { TaskListPageComponent } from "../task/pages/task-list-page/task-list-page.component";
import { AffectationTaskComponent } from "./pages/affectation-task/affectation-task.component";
export default [
    { path: 'list', component: TaskListPageComponent},
    { path: 'affectation', component: AffectationTaskComponent},
] as Routes;