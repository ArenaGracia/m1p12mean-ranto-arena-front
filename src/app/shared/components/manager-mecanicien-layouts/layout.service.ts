import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _sidebarHidden = new BehaviorSubject<boolean>(false);
  sidebarHidden$ = this._sidebarHidden.asObservable();

  toggleSidebar() {
    this._sidebarHidden.next(!this._sidebarHidden.value);
  }

  setSidebarHidden(hidden: boolean) {
    this._sidebarHidden.next(hidden);
  }
}
