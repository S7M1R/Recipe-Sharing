import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isLoggedIn = false;

  toggleSideNav() {
    this.sidenav.toggle();
  }

  login() {
    // Implement login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // Implement logout logic here
    this.isLoggedIn = false;
  }

  viewProfile() {
    // Implement view profile logic here
  }
}
