import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
export class RecipeCardComponent {
  constructor(
    public dialog: MatDialog,
    private sidenavStateService: SidenavStateService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  handleOpenUpdateForm() {
    this.dialog.open(UpdateRecipeFormComponent);
  }

  isSidenavOpen: boolean = false;
  sidenavSubscription!: Subscription;

  ngOnInit() {
    this.sidenavSubscription = this.sidenavStateService.sidenavOpen$.subscribe(
      (isOpen) => {
        if (isOpen) {
          setTimeout(() => (this.isSidenavOpen = isOpen), 500); // 0.5s delay when sidenav opens
        } else {
          this.isSidenavOpen = isOpen; // immediate reaction when sidenav closes
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  private threshold = -490; // Adjust this threshold as needed
  private cardActions!: HTMLElement;

  @ViewChild('cardActions') set content(content: ElementRef) {
    if (content) {
      this.cardActions = content.nativeElement;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.cardActions) {
      return; // Exit if cardActions is not initialized yet
    }

    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (rect.top < this.threshold) {
      this.renderer.addClass(this.cardActions, 'mat-card-actions-hidden');
    } else {
      this.renderer.removeClass(this.cardActions, 'mat-card-actions-hidden');
    }
  }
}
