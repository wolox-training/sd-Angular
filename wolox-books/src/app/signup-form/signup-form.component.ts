import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

const SECONDARY_BUTTON_TEXT = 'Log In';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 

  }

  secondaryButtonText: string = SECONDARY_BUTTON_TEXT;
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: '',
        lastName: '',
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[A-Z]).*$')]],
        passwordConfirmation: ['', Validators.required]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  onSubmit(signUpData) {
    console.log(signUpData);
  }

  private passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
  
    return password && passwordConfirmation && password.value !== passwordConfirmation.value ? { 'notMatchingPasswords': true } : null;
  };
}
