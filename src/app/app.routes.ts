import { Routes } from '@angular/router';
import { LayoutsComponent } from './shared/components/manager-mecanicien-layouts/layouts/layouts.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LoginComponent } from './pages/manager/login/login.component';
import { LoginClientComponent } from './pages/client/login/login.component';
import { LayoutComponent } from './shared/components/client-layout/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'manager',
        component: LayoutsComponent,
        canActivate: [AuthGuard],
        data: { profile: 'Manager' },
        loadChildren: () => import('./pages/manager/manager.routes')
    },
    {
        path: 'client',
        component: LayoutComponent,
        loadChildren: () => import('./pages/client/client.routes')
    },
    { path: 'manager/login', component: LoginComponent},
    { path: 'client/login', component: LoginClientComponent},
    { path: 'notfound', component: NotfoundComponent },
    { path: 'error:message', component: ErrorComponent },
    { path: '**', redirectTo: '/notfound' }
];
