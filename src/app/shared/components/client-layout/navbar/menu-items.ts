import { Router } from "@angular/router";
import { NavbarComponent } from "./navbar.component";

export interface MenuItem {
  label: string;
  icon: string;
  command: () => void;
}
export function getMenuItems(navbarComponent: NavbarComponent, isLoggedIn : boolean): MenuItem[] {
  const menuItems = [
    {
      label: "Accueil",
      icon: "fas fa-home",
      command: () => navbarComponent.navigateTo("/client")
    },
    {
      label: "Prestation",
      icon: "fas fa-cogs",
      command: () => navbarComponent.navigateTo("/client/prestation")
    }
  ];

  if (isLoggedIn) {
    menuItems.push(
      {
        label: "Devis",
        icon: "fas fa-envelope",
        command: () => navbarComponent.navigateTo("/client/quote")
      },
      {
        label: "Voitures",
        icon: "fas fa-car",
        command: () => navbarComponent.navigateTo("/client/car")
      }
  );
  }

  return menuItems;
}
