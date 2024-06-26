import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  registerationForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  handleRegister() {
    console.log('register: ', this.registerationForm.value);
  }

  handleLogin() {
    console.log('login:', this.loginForm.value);
  }
}
