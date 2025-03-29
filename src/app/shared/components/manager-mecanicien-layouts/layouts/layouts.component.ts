import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    HeaderComponent, SidebarComponent, FooterComponent, RouterModule, CommonModule
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  isSidebarHidden = false;

  constructor(private layoutService: LayoutService) {
    this.layoutService.sidebarHidden$.subscribe(
      hidden => this.isSidebarHidden = hidden
    );
  }
}
