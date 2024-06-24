import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { SidenavStateService } from '../../sidenav-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    RouterLink,
    FontAwesomeModule,
    NgClass,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  navLinks = [
    { path: '', label: 'Home', icon: faHome },
    {
      path: 'https://sameeroddinkazi.onrender.com',
      label: 'About',
      icon: faUser,
      external: true,
    },
    { path: '', label: 'Logout', icon: faSignOutAlt },
  ];

  isSidenavOpen: boolean = false;

  constructor(public sidenavStateService: SidenavStateService) {
    this.sidenavStateService.sidenavOpen$.subscribe((isOpen) => {
      this.isSidenavOpen = isOpen;
    });
  }

  toggleSidenav(sidenav: any) {
    // First change the z-index of the card actions
    const cardActions = document.querySelectorAll('mat-card-actions');
    cardActions.forEach((action) => {
      action.classList.add('sidenav-open');
      action.classList.remove('sidenav-closed');
    });

    // Also change the z-index of the fixed-btn
    const fixedBtn = document.querySelector('.fixed-btn');
    if (fixedBtn) {
      fixedBtn.classList.add('sidenav-open');
      fixedBtn.classList.remove('sidenav-closed');
    }

    // Then toggle the sidenav
    setTimeout(() => {
      sidenav.toggle();
    }, 0);
  }

  closeSidenav(sidenav: any) {
    sidenav.close();
  }
}
