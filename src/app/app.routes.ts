import { Routes } from '@angular/router';
import { LayoutsComponent } from './shared/components/manager-mecanicien-layouts/layouts/layouts.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LoginComponent } from './pages/manager/login/login.component';
import { LoginClientComponent } from './pages/client/login/login.component';
import { LoginMecanicienComponent } from './pages/mecanicien/login/login.component';
import { LayoutComponent } from './shared/components/client-layout/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';
import { ReconnectComponent } from './shared/components/reconnect/reconnect.component';

export const routes: Routes = [
    { path: '', redirectTo: '/client/accueil', pathMatch: "full"},
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
    {
        path: 'mecanicien',
        component: LayoutsComponent,
        loadChildren: () => import('./pages/mecanicien/mecanicien.routes')
    },
    { path: 'manager/login', component: LoginComponent},
    { path: 'client/login', component: LoginClientComponent},
    { path: 'mecanicien/login', component: LoginMecanicienComponent},
    { path: 'notfound', component: NotfoundComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'reconnect', component: ReconnectComponent },
    { path: 'error:message', component: ErrorComponent },
    { path: '**', redirectTo: '/notfound' }
];
