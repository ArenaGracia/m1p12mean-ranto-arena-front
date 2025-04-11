import { Component, Input, HostListener } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { items, mecanicienItem } from './menu-items';


import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/service/auth.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, ButtonModule, Ripple, BadgeModule, CommonModule, MenuModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent { 
  @Input() isCollapsed = false;

  items : MenuItem[] = [];

  isSidebarHidden = false;
  isMobile = false;

  toggleSidebar() {
      this.isSidebarHidden = !this.isSidebarHidden;
  }

  constructor(private authService: AuthService, private layoutService: LayoutService) {
    this.checkScreenSize();
  }
  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isSidebarHidden = true; // Cache la sidebar sur mobile
    }
  }

  ngOnInit() {
    const user = this.authService.getUserInfo();
    if (user.profile === "Manager") {
      this.items = items;
    } else if(user.profile === "Mecanicien") {
      this.items = mecanicienItem;
    }
  }

  
onMenuItemClick() {
  if (window.innerWidth < 768) {
    this.layoutService.setSidebarHidden(true);
  }
}
}
