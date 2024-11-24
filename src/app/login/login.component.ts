import { Component, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}
  failedToLogin: boolean = false
  emptyEmail: boolean = false;
  invalidEmail: boolean = false;
  emptyPassword: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.validateEmail();
      this.validatePassword();
      return;
    }
    const data: {email: string, password: string} = {
      email: this.loginForm.value.email ? this.loginForm.value.email : '',
      password: this.loginForm.value.password ? this.loginForm.value.password : ''
    };
    if (data.email !== 'junko.gsc@gehenna.edu.jp' || data.password !== 'gsc') {
      this.failedToLogin = true
    }
    else {
      this.authService.login(data.email).subscribe((isLoggedIn: boolean) => {
        this.router.navigateByUrl('/');
      })
    }
  }

  getEmail(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  getPassword(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  validateEmail() {
    let hasText: string | null | undefined = this.loginForm.value.email;
    let isDirty: boolean | undefined = this.loginForm.get('email')?.dirty;
    let isInvalid: boolean | undefined = this.loginForm.get('email')?.invalid;

    if (!hasText) {
      this.emptyEmail = true;
    } else {
      this.emptyEmail = false;
    }

    if (hasText && isDirty && isInvalid) {
      this.invalidEmail = true;
    } else {
      this.invalidEmail = false;
    }
  }

  isEmptyEmail() {
    let hasText: string | null | undefined = this.loginForm.value.email;
    let isTouched: boolean | undefined = this.loginForm.get('email')?.touched;

    return !hasText && isTouched;
  }

  validatePassword() {
    let hasPassword: string | null | undefined = this.loginForm.value.password;
    let isTouched: boolean | undefined = this.loginForm.get('password')?.touched;

    this.emptyPassword = !hasPassword;
  }
}
