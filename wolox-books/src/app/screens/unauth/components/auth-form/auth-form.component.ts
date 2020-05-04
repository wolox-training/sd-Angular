import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() secondaryButtonText: string;
  @Input() secondaryButtonRedirectionUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
