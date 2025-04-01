import { Component, Input } from '@angular/core';
import { getMenuItems, MenuItem } from './menu-items';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuValue: boolean = false;
  menu_icon: string = "bi bi-list";
  items: MenuItem[] = [];
  isLoggedIn = false;


  constructor(
    private router: Router,
    private authService : AuthService
  ) {}

  ngOnInit() {
    this.updateMenu();
  }

  updateMenu() {
    this.isLoggedIn = this.authService.isLoggedRight("Client"); 
    this.items = getMenuItems(this, this.isLoggedIn);
  }

  

  login() {
    this.router.navigate(['/client/login']);
  }

  logout() {
    this.isLoggedIn = !this.isLoggedIn;
    this.authService.logout();
    this.updateMenu();
    this.closeMenu();
    this.router.navigate(['/client/accueil']); 
  }

  openMenu(){
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? "bi bi-x" : "bi bi-list";
  }

  closeMenu(){
    this.menuValue = false;
    this.menu_icon = "bi bi-list";
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }
  
}
