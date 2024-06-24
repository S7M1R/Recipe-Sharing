import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavStateService {
  private sidenavOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavOpen$ = this.sidenavOpenSubject.asObservable();

  setSidenavState(isOpen: boolean) {
    this.sidenavOpenSubject.next(isOpen);
  }
}
