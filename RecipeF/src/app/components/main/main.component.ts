import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RecipeCardComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  recipe = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];

  constructor(public dialog: MatDialog) {}
  handleOpenCreateRecipeForm() {
    this.dialog.open(CreateRecipeFormComponent);
  }
}
