import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const sign_in_btn =
      this.elementRef.nativeElement.querySelector('#sign-in-btn');
    const sign_up_btn =
      this.elementRef.nativeElement.querySelector('#sign-up-btn');
    const container = this.elementRef.nativeElement.querySelector('.container');

    this.renderer.listen(sign_up_btn, 'click', () => {
      this.renderer.addClass(container, 'sign-up-mode');
    });

    this.renderer.listen(sign_in_btn, 'click', () => {
      this.renderer.removeClass(container, 'sign-up-mode');
    });
  }
}
