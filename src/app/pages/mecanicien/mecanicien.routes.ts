import { Routes } from "@angular/router";
import { TaskListMecanicienComponent } from "./task-list/task-list.component";


export default [
    { path: '', redirectTo: '/mecanicien/login', pathMatch: "full"},
    { path: 'task', component: TaskListMecanicienComponent }
] as Routes;