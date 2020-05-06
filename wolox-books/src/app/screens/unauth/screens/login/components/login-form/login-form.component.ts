import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/screens/auth/home/screens/book-list/components/home/home.component';

const SECONDARY_BUTTON_TEXT = 'Sign Up';
const SECONDARY_BUTTON_REDIRECTION_URL = '/unauth/signup';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  secondaryButtonText: string = SECONDARY_BUTTON_TEXT;

  secondaryButtonRedirectionUrl: string = SECONDARY_BUTTON_REDIRECTION_URL;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(loginData:any) {
    this.userService.authenticateUser(loginData.email, loginData.password).subscribe(
      res => {
        localStorage.setItem('accessToken', res.headers.get('access-token'));
        localStorage.setItem('client', res.headers.get('client'));
        localStorage.setItem('uid', res.headers.get('uid'));
        this.router.navigate(['auth/home']);
      },
      error => console.log('Error!', error.error.errors)
    );
  }
}
