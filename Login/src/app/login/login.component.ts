import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutComponent } from '../component/layout/layout.component';
import { InputComponent } from '../component/input/input.component';

interface LoginForm{
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [LayoutComponent, InputComponent]
})

export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  submit(){};
  navigate(){};

  // constructor(
  //   private router: Router
  // ){
  //   this.loginForm = new FormGroup({});
  // }
}
