import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

const SECONDARY_BUTTON_TEXT = 'Sign Up';
const SECONDARY_BUTTON_REDIRECTION_URL = '/signup';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  // Button text
  secondaryButtonText: string = SECONDARY_BUTTON_TEXT;

  // Secondary button redirection url
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
        console.log('Headers', res.headers);
        console.log('Body', res.body.data);
      },
      error => console.log('Error!', error.error.errors)
    );
  }
}
