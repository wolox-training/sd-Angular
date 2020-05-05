import { Component, OnInit } from '@angular/core';

const SECONDARY_BUTTON_TEXT = 'Sign Up';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  // Button text
  secondaryButtonText: string = SECONDARY_BUTTON_TEXT;

  constructor() { }

  ngOnInit(): void {
  }
}
