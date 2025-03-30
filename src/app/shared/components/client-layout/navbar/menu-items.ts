import { Router } from "@angular/router";
import { NavbarComponent } from "./navbar.component";

export interface MenuItem {
  label: string;
  icon: string;
  command: () => void;
}
export function getMenuItems(navbarComponent: NavbarComponent): MenuItem[] {
  return [
    {
      label: "Accueil",
      icon: "fas fa-home",
      command: () => navbarComponent.navigateTo("/client")
    },
    {
      label: "Prestation",
      icon: "fas fa-cogs",
      command: () => navbarComponent.navigateTo("/client/prestation")
    },
    {
      label: "Contact",
      icon: "fas fa-envelope",
      command: () => navbarComponent.navigateTo("/client/contact")
    }
  ];
}
