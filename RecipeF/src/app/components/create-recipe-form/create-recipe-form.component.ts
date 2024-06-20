import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  templateUrl: './create-recipe-form.component.html',
  styleUrl: './create-recipe-form.component.css',
})
export class CreateRecipeFormComponent {
  recipeItem: any = {
    title: '',
    description: '',
    foodType: '',
    image: '',
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
