import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { deprecate } from 'util';

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
  logout() {
    // Add your logout logic here
    console.log('Logout clicked');
  }
}
