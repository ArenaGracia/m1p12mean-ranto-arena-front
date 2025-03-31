import { Component, Input } from '@angular/core';
import { getMenuItems, MenuItem } from './menu-items';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  isLoggedIn = false; // Supposons que l'utilisateur est déconnecté au début

  constructor(private router: Router) {
    this.items = getMenuItems(this); 
  }

  login() {
    this.router.navigate(['/client/login']);
    // this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
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
