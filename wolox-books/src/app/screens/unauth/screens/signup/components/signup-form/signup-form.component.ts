import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

const SECONDARY_BUTTON_TEXT = 'Log In';
const SECONDARY_BUTTON_REDIRECTION_URL = '/unauth/login'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  // Secondary button redirection url
  secondaryButtonText: string = SECONDARY_BUTTON_TEXT;

  // Secondary button redirection url
  secondaryButtonRedirectionUrl: string = SECONDARY_BUTTON_REDIRECTION_URL;

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: '',
        lastName: '',
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[0-9])(?=.*[A-Z]).*$')]],
        passwordConfirmation: ['', Validators.required]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  onSubmit(signUpData:any) {
    const user: User = new User(
      signUpData.name,
      signUpData.lastName,
      signUpData.email,
      signUpData.password,
      signUpData.passwordConfirmation
    );

    this.userService.createUser(user).subscribe(
      data => {
        console.log('Sucess!', data),
        this.router.navigate(['unauth/login']);
      },
      error => console.log('Error!', error)
    );
  }

  private passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
  
    return password && passwordConfirmation && password.value !== passwordConfirmation.value ? { 'notMatchingPasswords': true } : null;
  };
}
