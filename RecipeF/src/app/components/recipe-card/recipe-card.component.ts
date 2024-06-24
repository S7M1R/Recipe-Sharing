import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateRecipeFormComponent } from '../update-recipe-form/update-recipe-form.component';
import { NgClass, NgIf } from '@angular/common';
import { SidenavStateService } from '../../sidenav-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgIf, NgClass],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit, OnDestroy {
  isSidenavOpen: boolean = false;
  sidenavSubscription!: Subscription;

  constructor(
    public dialog: MatDialog,
    private sidenavStateService: SidenavStateService
  ) {}

  ngOnInit() {
    this.sidenavSubscription = this.sidenavStateService.sidenavOpen$.subscribe(
      (isOpen) => {
        this.isSidenavOpen = isOpen;
      }
    );
  }

  ngOnDestroy() {
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  handleOpenUpdateForm() {
    this.dialog.open(UpdateRecipeFormComponent);
  }
}
