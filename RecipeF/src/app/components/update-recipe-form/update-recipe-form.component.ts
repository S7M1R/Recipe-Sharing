import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  templateUrl: './update-recipe-form.component.html',
  styleUrl: './update-recipe-form.component.css',
})
export class UpdateRecipeFormComponent {
  recipeItem: any = {
    title: 'Pizza',
    description: 'khalo',
    foodType: 'Veg',
    image: 'imageeee',
  };
  CreateRecipeFormComponent: any;

  OnSubmit() {
    console.log(this.recipeItem);
    // Do something with the form data here
  }

  constructor(
    public dialog: MatDialog,
    @Inject(MatDialogRef)
    private dialogRef: MatDialogRef<CreateRecipeFormComponent>
  ) {}

  onClose() {
    this.dialogRef.close();
  }
}
