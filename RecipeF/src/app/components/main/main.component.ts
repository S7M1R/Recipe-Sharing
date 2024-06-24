import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import { SidenavStateService } from '../../sidenav-state.service';
import { Subscription } from 'rxjs';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RecipeCardComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    NgClass,
    NgFor,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  recipe = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];

  constructor(
    public dialog: MatDialog,
    private sidenavStateService: SidenavStateService
  ) {}

  handleOpenCreateRecipeForm() {
    this.dialog.open(CreateRecipeFormComponent);
  }

  isSidenavOpen: boolean = false;
  sidenavSubscription!: Subscription;

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
}
