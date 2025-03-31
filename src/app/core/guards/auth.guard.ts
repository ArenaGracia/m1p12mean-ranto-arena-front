import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const token = this.auth.getToken();
        if (!token) {
            console.log("TOKEN non present, redirection vers login");
            
            let expectedRole = route.data['profile'];
            let profileRoute = expectedRole
                .toLowerCase()  
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


            this.router.navigate(['/'+profileRoute+'/login']);
            return false;
        }

            const expectedRole = route.data['profile'];
            const payload = JSON.parse(atob(token.split('.')[1]));

        if (expectedRole && payload.profile !== expectedRole) {
            console.log(`Profil autorisé(s): ${expectedRole}. Votre profil : ${payload.profile} `);
            
            this.router.navigate(['/unauthorized']);
            return false;
        }
        return true;
  }
}